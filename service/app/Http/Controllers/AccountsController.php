<?php namespace App\Http\Controllers;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User;
use App\VolunteerApplication;
use App\Exceptions\ModelExistsException;
use Illuminate\Support\Facades\Hash as Hash;

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
            // hash the password
            $password = $accountMeta['password'];
            $hashedPassword = Hash::make($password);

            $accountMeta['password'] = $hashedPassword;
            $User = User::create($accountMeta);

            return response()->json($User);
        }
    }

    public function getAccount($accountID) {
        $User  = User::where('id', '=', $accountID)->firstOrFail();
        return response()->json($User);
    }

    public function updateAccount(Request $request) {
        // update the account - to get here, should have survived jwt middleware auth check
        $credentials = $this->getCredentials($request);
        $plainPassword = $credentials['password'];
        $User = User::where('username', '=', $credentials['username'])
            ->firstOrFail();
        $hashedPassword = Hash::make($plainPassword);

        $update = [ "password" => $hashedPassword ];
        $User->update($update);
        return response()->json($User);
    }

    public function loginAccount(Request $request) {
        $credentials = $this->getCredentials($request);

        $plainPassword = $credentials['password'];

        $User = User::where('username', '=', $credentials['username'])
            ->firstOrFail();

        $hashedPassword = $User['password'];
        if (!Hash::check($plainPassword, $hashedPassword)) {
            return response()->json(['error' => 'unauthorized'], 400);
        }

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

    public function forgotPassword(Request $request) {
        $accountMeta = $request->all();

        $email = $accountMeta['email'];
        $User = User::where('username', '=', $email)
            ->first();

        if ( !$User ) {
            // send a 200 OK even though its not a registered user, to prevent spammers from fishing
            // for valid emails
            return response()->json("{}");
        }

        // its a valid account - construct a temporary login URL and send it to the user

        // xxx - todo - make this expiring!
        $token = JWTAuth::fromUser($User);

        $host = env('HOST_URL', 'http://pth.mi-squared.com/client/dist/index.html');
        $loginLink = $host . "#/external-login?token=" . $token . "&username=". $email . "&next=account";

        $to      =  $email;
        $subject = 'Password reset link';
        $message = 'Hello! Please use this temporary link to reset Your Best Pathway to Health Volunteer Account password: ' . $loginLink;
        $headers = 'From: do_not_reply@pth.mi-squared.com' . "\r\n" .
            'Reply-To: do_not_reply@pth.mi-squared.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);

        return response()->json("{}");
    }

}
