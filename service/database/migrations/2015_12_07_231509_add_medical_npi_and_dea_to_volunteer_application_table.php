<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMedicalNpiAndDeaToVolunteerApplicationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('volunteer_application', function (Blueprint $table) {
          $table->string('q_medical_npi')->default("");
          $table->string('q_medical_dea')->default("");
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
          $table->dropColumn('q_medical_npi');
          $table->dropColumn('q_medical_dea');
        });
    }
}
