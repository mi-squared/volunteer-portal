<?php namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\FormList;
use App\Option;

class FormListsController extends BaseController
{
  public function getFormList($formListId) {
    $formList = FormList::where('id', '=', $formListId);
    return response()->json($formList);
  }


}

?>
