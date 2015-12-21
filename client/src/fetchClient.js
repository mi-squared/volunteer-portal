import "whatwg-fetch";
import {getServiceBaseURL} from "./core";

const fetchClient = {

  getOptions: function() {
    return fetch(getServiceBaseURL() + '/api/v1/form-lists')
  },

  getDocumentsJson: function() {
    return fetch(getServiceBaseURL() + '/api/v1/documents')
  },

  getDocumentUrl: function(fileName) {
    return fetch(getServiceBaseURL() + '/api/v1/documents/' + fileName)
  },

  getUploadUrl: function(appID, fileName) {
    return fetch(getServiceBaseURL() + '/api/v1/uploads/' + appID + '/' + fileName)
  }

}

export default fetchClient;
