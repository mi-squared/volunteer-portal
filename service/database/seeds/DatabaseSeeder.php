<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
// use App\Database\Seeds\FormListsSeeder as FormListsSeeder;

class DatabaseSeeder extends Seeder {

    public function run() {
        Model::unguard();

        $this->call( FormListsSeeder::class );
        $this->call( OptionsSeeder::class );

        Model::reguard();

    }
}

?>
