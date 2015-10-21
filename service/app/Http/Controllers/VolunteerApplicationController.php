<?php namespace App\Http\Controllers;

use JWTAuth;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\VolunteerApplication;

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
            $VolunteerApplication  = VolunteerApplication::where('id', '=', $volunteerApplicationID)->firstOrFail();
            $VolunteerApplication->update($applicationMeta);
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
        return response()->json($VolunteerApplication);
    }

}
