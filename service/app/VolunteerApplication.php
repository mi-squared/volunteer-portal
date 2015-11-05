<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class VolunteerApplication extends Model
{
    protected $table = 'volunteer_application';

    protected $fillable = [
        'user_id',

        // personal
        "q_dob",
        "q_race_ethnicity",
        "q_gender",
        'q_first_name',
        'q_middle_name',
        'q_last_name',
        'q_languages',
        'q_email',
        'q_tshirt',

        // contact
        "q_address_1",
        "q_address_2",
        "q_address_city",
        "q_address_state",
        "q_address_zip",
        "q_address_country",
        "q_phone_mobile",
        "q_phone_home",

        // emergency contact
        "q_emergency_contact_name",
        "q_emergency_contact_relationship",
        "q_emergency_contact_phonenumber",

        // children
        "q_bringing_children",

        // church
        "q_is_adventist",
        "q_church_name",
        "q_church_pastor_name",
        "q_church_pastor_email",
        "q_church_pastor_phone",
        "q_church_affiliation",

        // student
        "q_is_student",
        "q_school_level",
        "q_school_name",
        "q_date_graduation",
        "q_school_studied_area",
        "q_school_sponsor",

        // volunteer
        "q_volunteer_organization_member",
        "q_volunteer_organization",
        "q_volunteered_before",
        "q_volunteered_area",
        "q_volunteered_capacity",
        "q_volunteering_area",

        // license
        "q_volunteering_in_licensed_area",
        "q_licensed_state",
        "q_licensed_discipline",
        "q_licensed_expiration_date",

        // medical
        "q_is_medical_professional",
        "q_medical_specialties",
        "q_medical_subspecialties",

        // legal
        "q_is_legal_professional",

        // availability
        "q_available_entire_time",

        "q_available_day_mon",
        "q_available_day_tue",
        "q_available_day_wed",
        "q_available_day_thu",
        "q_available_day_fri",
        "q_available_day_sat",
        "q_available_day_sun",

        "q_available_preactivity_trucks",
        "q_available_preactivity_central",
        "q_available_preactivity_dept",

        "q_available_postactivity_teardown",
        "q_available_postactivity_truck",
        "q_available_postactivity_followup",
        "q_available_postactivity_follow2",
        "q_available_postactivity_centers",

        "q_esigned",
        "q_esigned_date"
    ];
}