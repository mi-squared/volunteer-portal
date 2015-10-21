<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToVolunteerApplication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('volunteer_application', function (Blueprint $table) {
            // personal
            $table->string("q_languages")->default("");

            // contact
            $table->string("q_address_country")->default("");

            // children
            $table->string("q_bringing_children")->default("");

            // student
            $table->string("q_school_studied_area")->default("");
            $table->string("q_school_sponsor")->default("");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('volunteer_application', function (Blueprint $table) {
            $table->dropColumn("q_languages");
            $table->dropColumn("q_address_country");
            $table->dropColumn("q_bringing_children");
            $table->dropColumn("q_school_studied_area");
            $table->dropColumn("q_school_sponsor");
        });
    }
}
