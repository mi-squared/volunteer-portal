<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVolunteerApplicationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('volunteer_application', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');

            // personal
            $table->string("q_dob")->default("");
            $table->string("q_race_ethnicity")->default("");
            $table->string("q_gender")->default("");
            $table->string('q_first_name')->default("");
            $table->string('q_middle_name')->default("");
            $table->string('q_last_name')->default("");
            $table->string('q_email')->default("");

            // contact
            $table->string("q_address_1")->default("");
            $table->string("q_address_2")->default("");
            $table->string("q_address_city")->default("");
            $table->string("q_address_state")->default("");
            $table->string("q_address_zip")->default("");
            $table->string("q_phone_mobile")->default("");
            $table->string("q_phone_home")->default("");

            // emergency contact
            $table->string("q_emergency_contact_name")->default("");
            $table->string("q_emergency_contact_relationship")->default("");
            $table->string("q_emergency_contact_phonenumber")->default("");

            // church
            $table->string("q_is_adventist")->default("");
            $table->string("q_church_name")->default("");
            $table->string("q_church_pastor_name")->default("");
            $table->string("q_church_pastor_email")->default("");
            $table->string("q_church_pastor_phone")->default("");
            $table->string("q_church_affiliation")->default("");

            // student
            $table->string("q_is_student")->default("");
            $table->string("q_school_level")->default("");
            $table->string("q_school_name")->default("");
            $table->string("q_date_graduation")->default("");

            // volunteer
            $table->string("q_volunteer_organization_member")->default("");
            $table->string("q_volunteer_organization")->default("");
            $table->string("q_volunteered_before")->default("");
            $table->string("q_volunteered_area")->default("");
            $table->string("q_volunteered_capacity")->default("");
            $table->string("q_volunteering_area")->default("");

            // license
            $table->string("q_volunteering_in_licensed_area")->default("");
            $table->string("q_licensed_state")->default("");
            $table->string("q_licensed_discipline")->default("");
            $table->string("q_licensed_expiration_date")->default("");

            // medical
            $table->string("q_is_medical_professional")->default("");
            $table->string("q_medical_specialties")->default("");

            // legal
            $table->string("q_is_legal_professional")->default("");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('volunteer_application');
    }
}
