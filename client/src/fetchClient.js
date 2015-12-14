import "whatwg-fetch";
import {URL} from "./url";

const fetchClient = {

  getOptions: function() {
    return fetch(URL + '/api/v1/form-lists')
  },

  getDocumentsJson: function() {
    return fetch(URL + '/api/v1/documents')
  },

  getDocumentUrl: function(fileName) {
    return fetch(URL + '/api/v1/documents/' + fileName)
  }

}

export default fetchClient;
