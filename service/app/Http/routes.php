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
    return $app->welcome();
});


///////////////////////////////////////////////////////////
// Accounts
///////////////////////////////////////////////////////////

//
// JWT protected routes
//
$app->group(['middleware' => 'jwt.auth'], function($app) {
    /**
     * Retrieve a list of all accounts
     */
    $app->get(
        '/api/v1/accounts',
        'App\Http\Controllers\AccountsController@getAllAccounts'
    );

    /**
     * Fetch a specific account by ID
     */
    $app->get(
        '/api/v1/accounts/{id}',
        'App\Http\Controllers\AccountsController@getAccount'
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


///////////////////////////////////////////////////////////
// Applications
///////////////////////////////////////////////////////////

//
// JWT protected routes
//
$app->group(['middleware' => 'jwt.auth'], function($app) {
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
