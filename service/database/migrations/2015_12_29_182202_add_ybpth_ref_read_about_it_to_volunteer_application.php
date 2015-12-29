<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddYbpthRefReadAboutItToVolunteerApplication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('volunteer_application', function (Blueprint $table) {
        $table->string("q_ybpth_ref_read_about_it")->default("");
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
        $table->dropColumn("q_ybpth_ref_read_about_it");
      });
    }
}
