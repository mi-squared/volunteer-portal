<?php namespace App\Http\Controllers;

use Aws\S3\S3Client;
use JWTAuth;
use App\Upload;
use App\VolunteerApplication;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Redirect;

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
      if (preg_match('/^documents\\/(.+)(\.pdf|\.docx|\.doc)/', $obj["Key"], $matches_out)) { //match if in documents/ and .pdf/.docx/.doc
        array_push($filteredXml, $matches_out[1] . $matches_out[2]);
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

    $presignedUrlArray = [
        'url' => (string) $presignedUrl
      ];

    return json_encode($presignedUrlArray);

    // Redirect::away($presignedUrl); // none of these actually work
    // return redirect($presignedUrl);
    // return Redirect::to($presignedUrl);
    // return response()->download($presignedUrl);

  }

  public function getUploadUrl($appID, $key) {

    $s3Client = new S3Client([
      'region'  => getenv('S3_REGION'),
      'version' => "2006-03-01"
    ]);

    $params = [
      'Bucket' => getenv('S3_BUCKET'),
      'Key' => 'completed_documents/' . $appID . '/' . $key
    ];

    $cmd = $s3Client->getCommand('PutObject', $params);

    $request = $s3Client->createPresignedRequest($cmd, '+5 minutes');

    // Get the actual presigned-url
    $presignedUrl = $request->getUri();

    $getUrl = $s3Client->getObjectUrl($params['Bucket'], $params['Key']); // actually get the url to be stored in laravel

    $presignedUrlArray = [
        'postUrl' => (string) $presignedUrl,
        'getUrl'  => (string) $getUrl
      ];

    return json_encode($presignedUrlArray);

  }

}
