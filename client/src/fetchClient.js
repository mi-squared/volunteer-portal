import "whatwg-fetch";

const fetchClient = {

  getOptionsDev: function() {
    return fetch('http://localhost:7771/api/v1/form-lists/')
  },

  getOptionsProd: function () {
    return fetch('/* realURL */ /api/v1/form-lists/') 
  }

}

export default fetchClient;
