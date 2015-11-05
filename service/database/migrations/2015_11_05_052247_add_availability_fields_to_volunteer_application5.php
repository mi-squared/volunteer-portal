<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAvailabilityFieldsToVolunteerApplication5 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('volunteer_application', function (Blueprint $table) {
            $table->string("q_esigned_date")->default("");
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
            $table->string("q_esigned_date")->default("");
        });
    }
}
