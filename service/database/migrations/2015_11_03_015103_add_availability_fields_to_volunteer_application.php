<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAvailabilityFieldsToVolunteerApplication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('volunteer_application', function (Blueprint $table) {
            $table->string("q_available_day_mon")->default("");
            $table->string("q_available_day_tue")->default("");
            $table->string("q_available_day_wed")->default("");
            $table->string("q_available_day_thu")->default("");
            $table->string("q_available_day_fri")->default("");
            $table->string("q_available_day_sat")->default("");
            $table->string("q_available_day_sun")->default("");

            $table->string("q_available_preactivity_trucks")->default("");
            $table->string("q_available_preactivity_central")->default("");
            $table->string("q_available_preactivity_dept")->default("");

            $table->string("q_available_postactivity_teardown")->default("");
            $table->string("q_available_postactivity_truck")->default("");
            $table->string("q_available_postactivity_followup")->default("");
            $table->string("q_available_postactivity_follow2")->default("");
            $table->string("q_available_postactivity_centers")->default("");
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
            $table->dropColumn("q_available_day_mon");
            $table->dropColumn("q_available_day_tue");
            $table->dropColumn("q_available_day_wed");
            $table->dropColumn("q_available_day_thu");
            $table->dropColumn("q_available_day_fri");
            $table->dropColumn("q_available_day_sat");
            $table->dropColumn("q_available_day_sun");

            $table->dropColumn("q_available_preactivity_trucks");
            $table->dropColumn("q_available_preactivity_central");
            $table->dropColumn("q_available_preactivity_dept");

            $table->dropColumn("q_available_postactivity_teardown");
            $table->dropColumn("q_available_postactivity_truck");
            $table->dropColumn("q_available_postactivity_followup");
            $table->dropColumn("q_available_postactivity_follow2");
            $table->dropColumn("q_available_postactivity_centers");
        });
    }
}
