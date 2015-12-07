<?php namespace App;

use Illuminate\Database\Eloquent\Model;

  class List extends Model
  {
    protected $table = "lists";

    protected $fillable = [
      'name'
    ];

  }

?>
