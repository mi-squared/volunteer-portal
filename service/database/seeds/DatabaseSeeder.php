<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

    public function run() {
        Model::unguard();

        $this->call( FormListsSeeder::class );
        $this->call( OptionsSeeder::class );
        $this->call( UsersSeeder::class );

        Model::reguard();

    }
}
