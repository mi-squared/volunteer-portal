<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBlsAclsColumnsToVolunteerApplication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('volunteer_application', function (Blueprint $table) {
          $table->string("q_bls_acls_certified")->default("");
          $table->string("q_bls_acls_expiration")->default("");
          $table->string("q_bls_acls_org")->default("");
          $table->string("q_bls_acls_org_other")->default("");
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
        $table->dropColumn('q_bls_acls_certified');
        $table->dropColumn('q_bls_acls_expiration');
        $table->dropColumn('q_bls_acls_org');
        $table->dropColumn('q_bls_acls_org_other');
      });
    }
}
