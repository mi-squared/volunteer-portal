import "whatwg-fetch";
import {getServiceBaseURL} from "./core";


function getFetchOptions() {
  return {
    method: "GET",
    headers: {
        'Authorization':'Bearer ' + sessionStorage.getItem('token')
    }
  }
}

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
    sessionStorage.getItem('token');
    return fetch(getServiceBaseURL() + '/api/v1/uploads/' + appID + '/' + fileName, getFetchOptions())
  }

}



export default fetchClient;
