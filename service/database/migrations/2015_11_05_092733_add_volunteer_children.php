<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddVolunteerChildren extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('volunteer_children', function (Blueprint $table) {
            $table->increments('id');
            $table->string('childID');
            $table->integer('application_id')->unsigned();
            $table->string('q_first_name')->default("");
            $table->string('q_middle_name')->default("");
            $table->string('q_last_name')->default("");
            $table->string('q_child_age')->default("");
            $table->string('q_tshirt')->default("");
            $table->string('q_child_grade')->default("");
            $table->string('q_child_allergies_medicines')->default("");
            $table->string('q_child_medications')->default("");
            $table->string('q_child_medical_problems')->default("");
            $table->timestamps();
            $table->foreign('application_id')
                ->references('id')
                ->on('volunteer_application');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('volunteer_children');

    }
}
