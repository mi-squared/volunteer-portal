import Q from 'q/q.js';
import {getServiceBaseURL}  from './core.js';
import "isomorphic-fetch";



export function login(username, password) {
    var data = {
        'username' : username,
        'password' : password
    };

    var deferred = Q.defer();
    // console.log(getServiceBaseURL() + '/api/v1/accounts/login')
    // console.log(data)

    $.ajax({
        type: "POST",
        url: getServiceBaseURL() + '/api/v1/accounts/login',
        data: data,
        success: function(response) {
            // login worked
            deferred.resolve(response);
        },
        error: function(request, status, error) {
            deferred.reject(request.responseText)
        },
        dataType: 'json'
    });

    // fetch(getServiceBaseURL() + '/api/v1/accounts/login', {
    //   method: 'post',
    //   body: data
    // }).then(
    //   console.log(response)
    // )
    // .then(checkStatus)
    // .then(parseJSON)
    // .then(function(data) {
    //   console.log('request succeeded with JSON response', data)
    // }).catch(function(error) {
    //   console.log('request failed', error)
    // })
    //
    // function checkStatus(response) {
    //   if (response.status >= 200 && response.status < 300) {
    //     return deferred.resolve(response)
    //   } else {
    //     var error = new Error(response.statusText)
    //     error.response = response
    //     deferred.reject(error.response)
    //     throw error
    //   }
    // }
    //
    // function parseJSON(response) {
    //   return response.json()
    // }



    return deferred.promise;
}

export function register(data) {
    var deferred = Q.defer();

    $.ajax({
        type: "POST",
        url: getServiceBaseURL() + '/api/v1/accounts',
        data: data, 
        success: function(response) {
            // successfull registration; try logging in
            login(data.username, data.password)
                .then(
                    function(r) {
                        deferred.resolve(r);
                    },
                    function(e) {
                        deferred.reject(e);
                    }
            );
        },
        error: function(request, status, error) {
            deferred.reject(request.responseText)
        },
        dataType: 'json'
    });

    return deferred.promise;
}

export function saveApplicationRemote(token, application) {
    var deferred = Q.defer();
    var applicationID = application['id'];
    var endpoint = (getServiceBaseURL() + '/api/v1/applications')
                 + (applicationID ?  '/' + applicationID : '');

    $.ajax({
        type: applicationID ? "PUT" : "POST",
        url: endpoint,
        data: JSON.stringify(application),
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type':'application/json'
        },
        success: function(response) {
            deferred.resolve(response);
        },
        error: function(request, status, error) {
            deferred.reject(request.responseText)
        },
        dataType: 'json'
    });

    return deferred.promise;
}

export function getApplication(token, applicationID) {
    var deferred = Q.defer();

    $.ajax({
        type: "GET",
        url: getServiceBaseURL() + '/api/v1/applications/' + applicationID,
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type':'application/json'
        },
        success: function(response) {
            deferred.resolve(response);
        },
        error: function(request, status, error) {
            deferred.reject(request.responseText)
        },
        dataType: 'json'
    });

    return deferred.promise;
}
