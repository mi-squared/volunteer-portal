import "whatwg-fetch";
import {URL} from "./url";

const fetchClient = {

  getOptions: function() {
    return fetch(URL + '/api/v1/form-lists/')
  }

}

export default fetchClient;
