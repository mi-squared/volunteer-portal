<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User as User; // to use Eloquent Model
use Illuminate\Support\Facades\Hash as Hash;


class UsersSeeder extends Seeder {
    public function run() {

        // hash the password
        $password = 'catmandudu';
        $hashedPassword = Hash::make($password);

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
