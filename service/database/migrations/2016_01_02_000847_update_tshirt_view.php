<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateTshirtView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("drop view vw_t_shirts");

        DB::statement("create view vw_t_shirts as
select vc.q_tshirt, la.user_id, va.id as application_id
  from volunteer_application va
    join volunteer_children vc
     on (va.id = vc.application_id)
    join vw_user_latest_app la
     on (va.id = la.application_id)
  where vc.q_tshirt != ''
union all
select va.q_tshirt, va.user_id, va.id as application_id
  from volunteer_application va
    join vw_user_latest_app la
     on (va.id = la.application_id)
  where va.q_tshirt != ''
 ");

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("drop view vw_t_shirts");

        DB::statement("create view vw_t_shirts as
select vc.q_tshirt, la.user_id, va.id as application_id
  from volunteer_application va
    join volunteer_children vc
     on (va.id = vc.application_id)
    join vw_user_latest_app la
     on (va.id = la.application_id)
union all
select va.q_tshirt, va.user_id, va.id as application_id
  from volunteer_application va
    join vw_user_latest_app la
     on (va.id = la.application_id)
 ");

    }
}
