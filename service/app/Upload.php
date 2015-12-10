<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $table = 'uploads';

    protected $fillable = [
        'application_id',
        'url',
        'src_name',
        'content_type',
        'size'
    ];

    public function volunteerApplication()
    {
        return $this->belongsTo('VolunteerApplication');
    }
}
