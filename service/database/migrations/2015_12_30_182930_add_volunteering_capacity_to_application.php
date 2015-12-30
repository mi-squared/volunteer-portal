<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddVolunteeringCapacityToApplication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
     public function up()
     {
      Schema::table('volunteer_application', function (Blueprint $table) {
          $table->string("q_volunteering_capacity")->default("");
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
        $table->dropColumn('q_volunteering_capacity');
      });
     }
}
