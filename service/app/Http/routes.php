<?php

namespace App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return "<!DOCTYPE html>
            <html>
            <head>
                <title>YBPTH</title>

                <link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>

                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        color: #B0BEC5;
                        display: table;
                        font-weight: 100;
                        font-family: 'Lato';
                    }

                    .container {
                        text-align: center;
                        display: table-cell;
                        vertical-align: middle;
                    }

                    .content {
                        text-align: center;
                        display: inline-block;
                    }

                    .title {
                        font-size: 96px;
                        margin-bottom: 40px;
                    }

                    .quote {
                        font-size: 24px;
                    }
                </style>
                <META http-equiv=\"refresh\" content=\"0;URL=/client/dist/index.html\">
            </head>
            <body>
                <div class=\"container\">
                    <div class=\"content\">
                        <div class=\"title\">Please wait...</div>
                    </div>
                </div>
            </body>
            </html>
        ";
});


///////////////////////////////////////////////////////////
// Accounts
///////////////////////////////////////////////////////////

//
// JWT protected routes
//
$app->group(['middleware' => ['jwt.auth', 'jwt.refresh']], function($app) {
    /**
     * Retrieve a list of all accounts
     */
    $app->get(
        '/api/v1/accounts',
        'App\Http\Controllers\AccountsController@getAllAccounts'
    );

    $app->get(
        '/api/v1/accounts/me',
        'App\Http\Controllers\AccountsController@getAccountFromToken'
    );

    /**
     * Fetch a specific account by ID
     */
    $app->get(
        '/api/v1/accounts/{id}',
        'App\Http\Controllers\AccountsController@getAccount'
    );

    /**
     * Fetch a specific account by username
     */
    $app->get(
        '/api/v1/users/{username}/account',
        'App\Http\Controllers\AccountsController@getAccountByUsername'
    );

    /**
     * Update an existing account
     */
    $app->put(
        '/api/v1/accounts',
        'App\Http\Controllers\AccountsController@updateAccount'
    );
});


//
// Open routes
//
/**
 * Login to an existing account
 */
$app->post(
    '/api/v1/accounts/login',
    'AccountsController@loginAccount'
);

/**
 * Create a new account
 */
$app->post(
    '/api/v1/accounts',
    'AccountsController@createAccount'
);

/**
 * Create a forgot account password
 */
$app->post(
    '/api/v1/accounts/forgotPassword',
    'AccountsController@forgotPassword'
);


// FormLists and Options
$app->get(
    '/api/v1/form-lists/{formListID}',
    'FormListsController@getFormList'
);

$app->get(
    '/api/v1/form-lists/{formListID}/options',
    'FormListsController@getOptions'
);

$app->get(
    '/api/v1/form-lists',
    'FormListsController@getFormListsOptions'
);

///////////////////////////////////////////////////////////
// Downloads / Uploads
///////////////////////////////////////////////////////////
  // Get list of All docs
$app->get(
    '/api/v1/documents',
    'UploadsController@listDocuments'
);

  // Get url for a specific doc
$app->get(
    '/api/v1/documents/{key}',
    'UploadsController@getDownloadUrl'
);

// Upload Forms
// $app->group(['middleware' => ['jwt.auth', 'jwt.refresh']], function($app) {
  $app->get(
      '/api/v1/uploads/{appID}/{key}',
      'UploadsController@getUploadUrl'
  );
// });

///////////////////////////////////////////////////////////
// Applications
///////////////////////////////////////////////////////////

//
// JWT protected routes
//
$app->group(['middleware' => ['jwt.auth', 'jwt.refresh']], function($app) {
    /**
     * Fetch a specific application by ID
     */
    $app->get(
        '/api/v1/applications/{volunteerApplicationID}',
        'App\Http\Controllers\VolunteerApplicationController@getVolunteerApplication'
    );

    /**
     * Create a new application
     */
    $app->post(
        '/api/v1/applications',
        'App\Http\Controllers\VolunteerApplicationController@createVolunteerApplication'
    );
    /**
     * Update an application
     */
    $app->put(
        '/api/v1/applications/{volunteerApplicationID}',
        'App\Http\Controllers\VolunteerApplicationController@updateVolunteerApplication'
    );

});
