<?php namespace App\Http\Controllers;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User;
use App\VolunteerApplication;
use App\Exceptions\ModelExistsException;

class AccountsController extends BaseController
{
    public function getAllAccounts() {

        $collection = User::all();

        return json_encode($collection, JSON_PRETTY_PRINT);
    }

    public function createAccount(Request $request) {
        $accountMeta = $request->all();
        $User  = User::firstOrNew(['email' => $accountMeta['email']]);

        if ( $User['id'] ) {
            throw new ModelExistsException();
        } else {
            $User = User::create($request->all());
            return response()->json($User);
        }
    }

    public function getAccount($accountID) {
        $User  = User::where('id', '=', $accountID)->firstOrFail();
        return response()->json($User);
    }

    public function updateAccount() {
        return "{}";
    }

    public function loginAccount(Request $request) {
        $credentials = $this->getCredentials($request);

        $User = User::where('username', '=', $credentials['username'])
            ->where( 'password', '=', $credentials['password'])
            ->firstOrFail();

        $VolunteerApplication =
            VolunteerApplication::where('user_id', '=', $User['id'])
            ->first();

        try
        {
            $token = JWTAuth::fromUser($User);
            $responseMeta = ['token' => $token, 'account' => $User];
            if ( $VolunteerApplication && $VolunteerApplication['id'] ) {
                $responseMeta['application_id'] = $VolunteerApplication['id'];
            }
            return response()->json($responseMeta, 200);
        }
        catch (JWTException $e)
        {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
    }

    protected function getCredentials(Request $request)
    {
        return $request->only('username', 'password');
    }
}
