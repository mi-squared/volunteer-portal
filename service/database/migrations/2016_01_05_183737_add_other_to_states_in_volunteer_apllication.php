<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOtherToStatesInVolunteerApllication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
     Schema::table('volunteer_application', function (Blueprint $table) {
         $table->string("q_address_state_other")->default("");
         $table->string("q_licensed_state_other")->default("");
     });
    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {
     Schema::table('volunteer_application', function ($table) {
       $table->dropColumn('q_address_state_other');
       $table->dropColumn('q_licensed_state_other');
     });
    }
}
