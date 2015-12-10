<?php namespace App;

use Illuminate\Database\Eloquent\Model;

  class FormList extends Model
  {
    protected $table = 'form_lists';

    protected $fillable = [
      'name'
    ];

    public function options()
    {
        return $this->hasMany('Option','form_list_id');
    }

  }
