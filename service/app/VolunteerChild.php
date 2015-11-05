<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class VolunteerChild extends Model
{
    protected $table = 'volunteer_children';

    protected $fillable = [
        'childID',
        'application_id',
        'q_first_name',
        'q_middle_name',
        'q_last_name',
        'q_child_age',
        'q_tshirt',
        'q_child_grade',
        'q_child_allergies_medicines',
        'q_child_medications',
        'q_child_medical_problems'
    ];

    public function volunteerApplication()
    {
        return $this->belongsTo('VolunteerApplication');
    }
}