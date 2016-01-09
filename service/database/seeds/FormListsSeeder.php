<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\FormList as FormList; // to use Eloquent Model

class FormListsSeeder extends Seeder {
    public function run() {
        // clear table
        FormList::truncate();
        // add 1st row

        // main-page
        FormList::create( [
            'id' => '1',
            'name' => 'address_state'
        ] );
        FormList::create( [
            'id' => '2',
            'name' => 'address_country'
        ] );
        FormList::create( [
            'id' => '3',
            'name' => 'tshirt'
        ] );
        FormList::create( [
            'id' => '4',
            'name' => 'languages'
        ] );
        FormList::create( [
            'id' => '5',
            'name' => 'ybpth_ref'
        ] );

        // volunteering-detail
        FormList::create( [
            'id' => '6',
            'name' => 'licensed_discipline'
        ] );
        FormList::create( [
            'id' => '7',
            'name' => 'licensed_state'
        ] );
        FormList::create( [
            'id' => '8',
            'name' => 'bls_acls_org'
        ] );
        FormList::create( [
            'id' => '9',
            'name' => 'volunteering_area'
        ] );
        FormList::create( [
            'id' => '10',
            'name' => 'medical_specialties'
        ] );
        FormList::create( [
            'id' => '11',
            'name' => 'child_age'
        ] );
        FormList::create( [
            'id' => '12',
            'name' => 'gender'
        ] );
        FormList::create( [
            'id' => '13',
            'name' => 'school_level'
        ] );
        FormList::create( [
            'id' => '14',
            'name' => 'avaiable_full_half'
        ] );
        FormList::create( [
            'id' => '15',
            'name' => 'avaiable_am_pm'
        ] );

    }
}
