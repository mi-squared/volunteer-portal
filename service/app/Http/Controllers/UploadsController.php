<?php namespace App\Http\Controllers;

use Aws\S3\S3Client;
use JWTAuth;
use App\Upload;
use App\VolunteerApplication;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class UploadsController extends BaseController
{

  public function listDocuments() {

    $s3Client = new S3Client([
      'region'  => getenv('S3_REGION'),
      'version' => "2006-03-01"
    ]);

    $params = [
      'Bucket' => getenv('S3_BUCKET'),
      'Key' => '/documents/'
    ];

    $cmd = $s3Client->getCommand('ListObjects', $params);

    $request = $s3Client->createPresignedRequest($cmd, '+2 minutes');

    // Get the actual presigned-url
    $presignedUrl = (string) $request->getUri();
    $contents = file_get_contents($presignedUrl);
    $xml = (array) simplexml_load_string($contents);
    $xmlContents = (array) $xml['Contents'];
    $filteredXml = [];
    foreach($xmlContents as $obj ) {
      $obj = (array) $obj;
      if (preg_match('/^documents\\/.+\.pdf/', $obj["Key"])) { //match if in documents/ and .pdf
        array_push($filteredXml, $obj["Key"]);
      }
    };

    $json = json_encode($filteredXml);

    return $json;

  }

  public function getDownloadUrl($key) {

    $s3Client = new S3Client([
      'region'  => getenv('S3_REGION'),
      'version' => "2006-03-01"
    ]);

    $params = [
      'Bucket' => getenv('S3_BUCKET'),
      'Key' => 'documents/' . $key
    ];

    $cmd = $s3Client->getCommand('GetObject', $params);

    $request = $s3Client->createPresignedRequest($cmd, '+2 minutes');

    // Get the actual presigned-url
    $presignedUrl = $request->getUri();


    return $presignedUrl;

    // return Redirect::to($presignedUrl);

    //$url = $s3Client->getObjectUrl('my-bucket', 'my-key'); // actually get the url to be stored in laravel

  }

  public function createUpload()
  {
    try
    {
        $token = JWTAuth::parseToken()->getToken();
        $User = JWTAuth::toUser($token);
        $userID = $User['id'];

        // $applicationMeta = $request->all();
        // $applicationMeta['user_id'] = $userID;
        // $VolunteerApplication = VolunteerApplication::create($applicationMeta);
        //
        // if ( array_key_exists('children', $applicationMeta) ) {
        //     foreach($applicationMeta['children'] as $child) {
        //         $VolunteerChild = VolunteerChild::create($child);
        //         $VolunteerApplication->children()->save($VolunteerChild);
        //     }
        // }
        //
        // $VolunteerApplication->children;
        // return response()->json($VolunteerApplication);
    }
    catch (JWTException $e)
    {
        // something went wrong whilst attempting to encode the token
        return response()->json(['error' => 'could_not_resolve_token_to_user'], 500);
    }
  }

}
