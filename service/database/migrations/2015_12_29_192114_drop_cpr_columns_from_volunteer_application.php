<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropCprColumnsFromVolunteerApplication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('volunteer_application', function ($table) {
        $table->dropColumn('q_cpr_certified');
        $table->dropColumn('q_cpr_expiration');
        $table->dropColumn('q_cpr_org');
        $table->dropColumn('q_cpr_org_other');
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
          $table->string("q_cpr_certified")->default("");
          $table->string("q_cpr_expiration")->default("");
          $table->string("q_cpr_org")->default("");
          $table->string("q_cpr_org_other")->default("");
      });
    }
}
