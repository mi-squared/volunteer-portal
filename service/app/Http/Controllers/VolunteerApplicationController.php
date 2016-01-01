<?php namespace App\Http\Controllers;

use JWTAuth;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\VolunteerApplication;
use App\VolunteerChild;
use App\User;
use App\Upload;
use App\Http\Controllers\UploadsController as UploadsController;

define("APPLICATION_CARRYOVER_FIELD_BLACKLIST", serialize(array(
    "id",

    "q_volunteering_area",
    "q_volunteering_capacity",

    "q_available_entire_time",
    "q_share_room",

    "q_available_day_mon",
    "q_available_day_tue",
    "q_available_day_wed",
    "q_available_day_thu",
    "q_available_day_fri",
    "q_available_day_sat",
    "q_available_day_sun",

    "q_available_preactivity_trucks",
    "q_available_preactivity_central",
    "q_available_preactivity_dept",

    "q_available_postactivity_teardown",
    "q_available_postactivity_truck",
    "q_available_postactivity_followup",
    "q_available_postactivity_follow2",
    "q_available_postactivity_centers",

    "q_esigned",
    "q_esigned_date",

    "q_comments"
))
);

class VolunteerApplicationController extends BaseController
{
    public function createVolunteerApplication(Request $request) {
        // todo - validation

        try
        {
            $token = JWTAuth::parseToken()->getToken();
            $User = JWTAuth::toUser($token);
            $userID = $User['id'];

            $applicationMeta = $request->all();
            $applicationMeta['user_id'] = $userID;
            $applicationMeta['event_id'] = getenv('CURRENT_EVENT_ID');
            $VolunteerApplication = VolunteerApplication::create($applicationMeta);

            if ( array_key_exists('children', $applicationMeta) ) {
                foreach($applicationMeta['children'] as $child) {
                    $VolunteerChild = VolunteerChild::create($child);
                    $VolunteerApplication->children()->save($VolunteerChild);
                }
            }

            $VolunteerApplication->children;
            return response()->json($VolunteerApplication);
        }
        catch (JWTException $e)
        {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_resolve_token_to_user'], 500);
        }
    }

    public function updateVolunteerApplication(Request $request, $volunteerApplicationID) {
        // todo - validation

        try
        {
            $applicationMeta = $request->all();

            $userID = $applicationMeta['user_id'];
            $User  = User::where('id', '=', $userID)->firstOrFail();

            // only a user may update their own application
            $error = $this->authCheck($User);
            if ( $error ) {
                return $error;
            }

            $VolunteerApplication  = VolunteerApplication::where('id', '=', $volunteerApplicationID)->firstOrFail();
            $VolunteerApplication->update($applicationMeta);
            if ( array_key_exists('children', $applicationMeta) ) {
                // children exist in the application

                $childIDs = [];

                // 1. add new children to the DB (those without an id); update those children with IDs.
                foreach($applicationMeta['children'] as $child) {
                    if ( array_key_exists('id', $child) ) {
                        $VolunteerChild = VolunteerChild::where('id', '=', $child['id'])->firstOrFail();
                        $VolunteerChild->update($child);
                    } else {
                        $VolunteerChild = VolunteerChild::create($child);
                    }
                    $VolunteerApplication->children()->save($VolunteerChild);

                    $childIDs[] = $VolunteerChild->id;
                }

                // 2. children in the DB which do not exist by id in the application should be removed
                foreach( $VolunteerApplication->children()->get() as $dbChild) {
                    if ( !in_array ( $dbChild->id, $childIDs ) ) {
                        error_log("Removing child " . $dbChild->id);
                        $dbChild->delete();
                    }
                }

            } else {
                // all children have been removed from the application; delete all children from the DB
                foreach( $VolunteerApplication->children()->get() as $dbChild) {
                    error_log("Removing child " . $dbChild->id);
                    $dbChild->delete();
                }
            }

            $VolunteerApplication->children;

            /// add uploads to app
            if ( array_key_exists('uploads', $applicationMeta) ) {
                foreach($applicationMeta['uploads'] as $upload) {
                    if ( array_key_exists('id', $upload) ) {
                        $Upload = Upload::where('id', '=', $upload['id'])->firstOrFail();
                        $Upload->update($upload);
                    } else {
                        $Upload = Upload::create($upload);
                    }
                    $VolunteerApplication->uploads()->save($Upload);
                }
            }
            $VolunteerApplication->uploads;
            return response()->json($VolunteerApplication);
        }
        catch (JWTException $e)
        {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_resolve_token_to_user'], 500);
        }
    }

    public function getVolunteerApplication($volunteerApplicationID) {
        $VolunteerApplication  = VolunteerApplication::where('id', '=', $volunteerApplicationID)->firstOrFail();

        $userID = $VolunteerApplication['user_id'];
        $User  = User::where('id', '=', $userID)->firstOrFail();

        // only a user may view their own application
        $error = $this->authCheck($User);
        if ( $error ) {
            return $error;
        }

        $VolunteerApplication->children;
        $VolunteerApplication->uploads; // don't know what this line does, but it is necessary
        return response()->json($VolunteerApplication);
    }

    public function authCheck($User) {
        // xxx todo - centralize this logic for DRY
        $payload = JWTAuth::getPayload(JWTAuth::getToken());
        $subjectAccountID = $payload['sub'];
        if ( $User['id'] != $subjectAccountID ) {
            return response()->json([ "error" => "unauthorized" ], 400);
        }
        return null;
    }


    public static function resolveApplicationFor($User) {
        $filterParams = ['user_id' => $User['id'], 'event_id' => getenv('CURRENT_EVENT_ID')];
        $VolunteerApplication = VolunteerApplication::where($filterParams)->first();

        if ( $VolunteerApplication && $VolunteerApplication['id'] ) {
            return $VolunteerApplication;
        }

        // no application matching the current exists
        // try to find the most recent application
        $PreviousVolunteerApplication = VolunteerApplication::where(
            ['user_id' => $User['id'] ]
        )->orderBy('id','DESC')->first();

        if ( $PreviousVolunteerApplication )  {
            // a previous application exists; therefore clone it

            $fieldBlacklist = unserialize (APPLICATION_CARRYOVER_FIELD_BLACKLIST);
            $cloneMeta = array();
            foreach( $PreviousVolunteerApplication->toArray() as $key => $value )
            {
                if ( !in_array($key, $fieldBlacklist) ) {
                    $cloneMeta[$key] = $value;
                }
            }
            // set the cloned application to current event
            $cloneMeta['event_id'] = getenv('CURRENT_EVENT_ID');
            $ClonedVolunteerApplication = VolunteerApplication::create($cloneMeta);

            // clone any uploads
            UploadsController::cloneUploads($PreviousVolunteerApplication, $ClonedVolunteerApplication);

            // clone any children
            foreach( $PreviousVolunteerApplication->children()->get() as $dbChild) {
                $childCloneMeta = array();

                foreach( $dbChild->toArray() as $key => $value )
                {
                    if ( $key != 'id' ) {
                        $childCloneMeta[$key] = $value;
                    }
                }
                $VolunteerChild = VolunteerChild::create($childCloneMeta);
                $ClonedVolunteerApplication->children()->save($VolunteerChild);
            }

            return $ClonedVolunteerApplication;
        }

        return null;
    }


}
