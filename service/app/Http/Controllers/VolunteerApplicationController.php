<?php namespace App\Http\Controllers;

use JWTAuth;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\VolunteerApplication;
use App\VolunteerChild;
use App\User;
use App\Upload;

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
                foreach($applicationMeta['children'] as $child) {
                    if ( array_key_exists('id', $child) ) {
                        $VolunteerChild = VolunteerChild::where('id', '=', $child['id'])->firstOrFail();
                        $VolunteerChild->update($child);
                    } else {
                        $VolunteerChild = VolunteerChild::create($child);
                    }
                    $VolunteerApplication->children()->save($VolunteerChild);
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
        $VolunteerApplication->uploads;
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


}
