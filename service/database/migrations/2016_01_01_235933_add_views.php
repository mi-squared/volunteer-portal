<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddViews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("create view vw_user_latest_app as
select max(id) as application_id, user_id
              from volunteer_application
             group by user_id");

        DB::statement("create view vw_user_contact as
select users.id, user_latest_app. application_id as application_id, volunteer_application.event_id as event_id,
          users.username, users.email,
          volunteer_application.q_first_name,
          volunteer_application.q_middle_name,
          volunteer_application.q_last_name,
          volunteer_application.q_phone_mobile,
          volunteer_application.q_phone_home,
          volunteer_application.q_address_1,
          volunteer_application.q_address_2,
          volunteer_application.q_address_city,
          volunteer_application.q_address_state,
          volunteer_application.q_address_zip,
          volunteer_application.q_address_country
   from users
    join vw_user_latest_app as user_latest_app
       on ( users.id = user_latest_app.user_id )
    join volunteer_application
       on ( volunteer_application.id = user_latest_app.application_id )");

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

        DB::statement("create view vw_t_shirts_quantity as
select count(*) as amount, q_tshirt, user_id, application_id
 from vw_t_shirts group by q_tshirt, user_id, application_id
 order by user_id, q_tshirt");

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("drop view vw_user_latest_app");
        DB::statement("drop view vw_user_contact");
        DB::statement("drop view vw_t_shirts");
        DB::statement("drop view vw_t_shirts_quantity");
    }
}
