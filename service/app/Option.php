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

    public function formList()
    {
        return $this->belongsTo('FormList');
    }

  }

?>
