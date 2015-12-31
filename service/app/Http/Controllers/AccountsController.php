<?php namespace App\Http\Controllers;

use Mail;
use Aws\S3\S3Client;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User;
use App\VolunteerApplication;
use App\Exceptions\ModelExistsException;
use Illuminate\Support\Facades\Hash as Hash;

define("SALT_PREFIX_SHA1",'$SHA1$');

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

            $salt=$this->oemr_password_salt();
            $hashedPassword=$this->oemr_password_hash($password,$salt);

            $accountMeta['password'] = $hashedPassword;
            $accountMeta['salt'] = $salt;

            $User = User::create($accountMeta);

            // get email template from s3
            $s3Client = new S3Client([
              'region'  => getenv('S3_REGION'),
              'version' => "2006-03-01"
            ]);

            $params = [
              'Bucket' => getenv('S3_BUCKET'),
              'Key' => 'emails/welcome.txt'
            ];

            $request = $s3Client->getObject($params);
            $result = $request["Body"];

            // build the email
            $to      =  $accountMeta['email'];
            $subject = 'Welcome to YBPTH';
            $message = $result;
            $headers = 'From: do_not_reply@pth.mi-squared.com' . "\r\n" .
                'Reply-To: do_not_reply@pth.mi-squared.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            mail($to, $subject, $message, $headers);

            return response()->json($User);
        }
    }

    public function getAccount($accountID) {
        $User  = User::where('id', '=', $accountID)->firstOrFail();
        $error = $this->authCheck($User);

        // auth: only the token owner can retrieve their own account
        if ( $error ) {
            return $error;
        }

        return $this->returnAccount($User);
    }

    public function getAccountFromToken() {
        $token = JWTAuth::parseToken()->getToken();
        $User = JWTAuth::toUser($token);

        return $this->returnAccount($User);
    }

    public function getAccountByUsername($username) {
        $User  = User::where('username', '=', $username)->firstOrFail();

        // auth: only the token owner can retrieve their own account
        $error = $this->authCheck($User);
        if ( $error ) {
            return $error;
        }

        return $this->returnAccount($User);
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

    /**
     * @param $User
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function returnAccount($User) {

      $filterParams = ['user_id' => $User['id'], 'event_id' => getenv('CURRENT_EVENT_ID')];
      $VolunteerApplication = VolunteerApplication::where($filterParams)->first();

        $responseMeta = ['account' => $User];

        if ($VolunteerApplication && $VolunteerApplication['id']) {

            $responseMeta['application_id'] = $VolunteerApplication['id'];
        }
        return response()->json($responseMeta, 200);
    }

    public function updateAccount(Request $request) {
        // update the account - to get here, should have survived jwt middleware auth check
        $credentials = $this->getCredentials($request);
        $plainPassword = $credentials['password'];
        $User = User::where('username', '=', $credentials['username'])
            ->firstOrFail();

        // auth: only the token owner can perform an update on the account
        $error = $this->authCheck($User);
        if ( $error ) {
            return $error;
        }

        $salt=$this->oemr_password_salt();
        $hashedPassword=$this->oemr_password_hash($plainPassword,$salt);

        $update = [ "password" => $hashedPassword, "salt" => $salt ];
        $User->update($update);
        return response()->json($User);
    }

    public function loginAccount(Request $request) {
        $credentials = $this->getCredentials($request);

        $plainPassword = $credentials['password'];


        $User = User::where('username', '=', $credentials['username'])
            ->firstOrFail();

        $salt = $User['salt'];
        $storedPassword = $User['password'];
        $hashedPassword=$this->oemr_password_hash($plainPassword,$salt);

        if ($storedPassword != $hashedPassword) {
            return response()->json(['error' => 'unauthorized'], 400);
        }

        $filterParams = ['user_id' => $User['id'], 'event_id' => getenv('CURRENT_EVENT_ID')];
        $VolunteerApplication = VolunteerApplication::where($filterParams)->first();

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
        $tomorrow = time() + (86400); // 24 hr
        $customClaims = ['exp' => $tomorrow];
        $token = JWTAuth::fromUser($User, $customClaims);

        $host = env('HOST_URL', 'http://pth.mi-squared.com/client/dist/index.html');
        $loginLink = $host . "#/external-login?token=" . $token . "&username=". $email . "&next=account";

        $to      =  $email;
        $from    =  "do_not_reply@" . env('HOST_NAME', 'pth-production-prwn5v7pi2.elasticbeanstalk.com');
        $subject = 'Password reset link';
        $message = 'Hello! Please use this temporary link to reset Your Best Pathway to Health Volunteer Account password: ' . $loginLink;
        $headers = 'From: '. $from . "\r\n" .
                   'Reply-To: ' . $from . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);

        // Mail::send('emails.reset_password', ['user' => $User, 'loginLink' => $loginLink], function ($m) use ($User) {
        //     $m->from('do_not_reply@pth.mi-squared.com', 'Password Reset Link(from)');
        //
        //     $m->to($User->email, $User->last_name . ', ' . $User->first_name)->subject('Password Reset Link(to)');
        // });
        //
        // Mail::raw('Text to e-mail', function($message)
        // {
        //     $message->from('us@example.com', 'Laravel');
        //
        //     $message->to('ryan.broughan@gmail.com');
        // });

        return response()->json("{}");
    }

    static public function oemr_password_hash($plaintext,$salt)
    {
        // if this is a SHA1 salt, the use prepended salt
        if(strpos($salt,SALT_PREFIX_SHA1)===0)
        {
            return SALT_PREFIX_SHA1 . sha1($salt.$plaintext);
        }
        else { // Otherwise use PHP crypt()
            $crypt_return = crypt($plaintext,$salt);
            if ( ($crypt_return == '*0') || ($crypt_return == '*1') || (strlen($crypt_return) < 6) ) {
                // Error code returned by crypt or not hash, so die
                error_log("FATAL ERROR: crypt() function is not working correctly in OpenEMR");
                die("FATAL ERROR: crypt() function is not working correctly in OpenEMR");
            }
            else {
                // Hash confirmed, so return the hash.
                return $crypt_return;
            }
        }
    }

    static public function oemr_password_salt()
    {
        $Allowed_Chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./';
        $Chars_Len = 63;

        $Salt_Length = 22;

        $salt = "";

        for($i=0; $i<$Salt_Length; $i++)
        {
            $salt .= $Allowed_Chars[mt_rand(0,$Chars_Len)];
        }

        // This is the preferred hashing mechanism
        if(CRYPT_BLOWFISH===1)
        {
            $rounds='05';
            //This string tells crypt to apply blowfish $rounds times.
            $Blowfish_Pre = '$2a$'.$rounds.'$';
            $Blowfish_End = '$';

            return $Blowfish_Pre.$salt.$Blowfish_End;
        }
        error_log("Blowfish hashing algorithm not available.  Upgrading to PHP 5.3.x or newer is strongly recommended");

        return SALT_PREFIX_SHA1.$salt;


    }

}
