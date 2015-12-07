<?php namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\FormList;
use App\Option;

class FormListsController extends BaseController
{
  public function getFormList($formListID) {
    $formList = FormList::find($formListID);
    return response()->json($formList);
  }

  public function getFormListOptions($formListID) {
    $options = Option::where('form_list_id', '=', $formListID)->get();
    return response()->json($options);
  }


}

?>
