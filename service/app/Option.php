<?php namespace App;

  class Option extends Model
  {
    protected $table = "options";

    protected $fillable = [
      'name',
      'value',
      'order'
    ];

    public function list()
    {
        return $this->belongsTo('List');
    }

  }

?>
