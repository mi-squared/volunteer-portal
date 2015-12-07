<?php namespace App;

use Illuminate\Database\Eloquent\Model;

  class Option extends Model
  {
    protected $table = "options";

    protected $fillable = [
      'list_id',
      'name',
      'value',
      'order'
    ];

    public function list()
    {
        return $this->belongsTo('FormList');
    }

  }

?>
