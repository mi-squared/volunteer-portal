<?php

use Illuminate\Database\Seeder;
use App\User as User; // to use Eloquent Model
use App\Http\Controllers\AccountsController as AccountsController;


class UsersSeeder extends Seeder {
    public function run() {

        // hash the password
        $password = 'catmandudu';

        $salt=AccountsController::oemr_password_salt();
        $hashedPassword=AccountsController::oemr_password_hash($password,$salt);

        if (!User::where('email', '=', 'testlogin@gmail.com')->first()) { //only make test user if non-existant
          User::Create( [
            'username' => 'testlogin@gmail.com',
            'last_name' => 'Test User',
            'first_name' => 'Hello',
            'middle_name' => 'Iama',
            'email' => 'testlogin@gmail.com',
            'password' => $hashedPassword
          ] );
        }


    }
}
