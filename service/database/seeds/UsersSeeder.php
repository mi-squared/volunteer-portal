<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User as User; // to use Eloquent Model
use Illuminate\Support\Facades\Hash as Hash;


class UsersSeeder extends Seeder {
    public function run() {
        // clear table
        User::truncate();
        // add 1st row
            // hash the password
        $password = 'catmandudu';
        $hashedPassword = Hash::make($password);
        User::create( [
          'username' => 'testlogin@gmail.com',
          'last_name' => 'Test User',
          'first_name' => 'Hello',
          'middle_name' => 'Iama',
          'email' => 'testlogin@gmail.com',
          'password' => $hashedPassword
        ] );

    }
}

?>
