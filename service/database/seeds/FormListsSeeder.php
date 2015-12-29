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
            'name' => 'address_state'
        ] );
        FormList::create( [
            'name' => 'address_country'
        ] );
        FormList::create( [
            'name' => 'tshirt'
        ] );
        FormList::create( [
            'name' => 'languages'
        ] );
        FormList::create( [
            'name' => 'ybpth_ref'
        ] );

        // volunteering-detail
        FormList::create( [
            'name' => 'licensed_discipline'
        ] );
        FormList::create( [
            'name' => 'licensed_state'
        ] );
        FormList::create( [
            'name' => 'bls_acls_org'
        ] );
        FormList::create( [
            'name' => 'volunteering_area'
        ] );
        FormList::create( [
            'name' => 'medical_specialties'
        ] );
        FormList::create( [
            'name' => 'child_age'
        ] );
        FormList::create( [
            'name' => 'gender'
        ] );
        FormList::create( [
            'name' => 'school_level'
        ] );
        FormList::create( [
            'name' => 'avaiable_full_half'
        ] );
        FormList::create( [
            'name' => 'avaiable_am_pm'
        ] );

    }
}
