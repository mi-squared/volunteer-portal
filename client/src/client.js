import Q from 'q/q.js';
import {getServiceBaseURL}  from './core.js';



export function login(username, password) {
    var data = {
        'username' : username,
        'password' : password
    };

    var deferred = Q.defer();

    var req = $.ajax({
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

    return deferred.promise;
}

export function register(data) {
    var deferred = Q.defer();

    let req = $.ajax({
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

export function updateAccount(token, data) {
    var deferred = Q.defer();

    let req = $.ajax({
        type: "PUT",
        url: getServiceBaseURL() + '/api/v1/accounts',
        data: JSON.stringify(data),
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type':'application/json'
        },
        success: function(response) {
            refreshToken(req);
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

export function forgotPassword(data) {
    var deferred = Q.defer();

    let req = $.ajax({
        type: "POST",
        url: getServiceBaseURL() + '/api/v1/accounts/forgotPassword',
        data: data,
        success: function(response) {
            refreshToken(req);
            deferred.resolve(response);
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

    let req = $.ajax({
        type: applicationID ? "PUT" : "POST",
        url: endpoint,
        data: JSON.stringify(application),
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type':'application/json'
        },
        success: function(response) {
            refreshToken(req);
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

    var req = $.ajax({
        type: "GET",
        url: getServiceBaseURL() + '/api/v1/applications/' + applicationID,
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type':'application/json'
        },
        success: function(response) {
            var headers = req.getAllResponseHeaders();
            refreshToken(req);
            deferred.resolve(response);
        },
        error: function(request, status, error) {
            deferred.reject(request.status)
        },
        dataType: 'json'
    });

    return deferred.promise;
}

export function getAccount(token) {
    var deferred = Q.defer();

    var req = $.ajax({
        type: "GET",
        url: getServiceBaseURL() + '/api/v1/accounts/me',
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type':'application/json'
        },
        success: function(response) {
            refreshToken(req);
            deferred.resolve(response);
        },
        error: function(request, status, error) {
            deferred.reject(request.status)
        },
        dataType: 'json'
    });

    return deferred.promise;
}


export function isLoggedIn(storedCredentials) {
  let {token, applicationID} = storedCredentials;
  return getAccount(token).then((response) => {return true}, (error) => {return false})
}

function refreshToken(request) {
  let newToken = request.getResponseHeader('Authorization');
  if (newToken) {
    sessionStorage.setItem('token', newToken.replace("Bearer ", ""));
  }
}
