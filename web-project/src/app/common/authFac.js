// A service that manages user authentications including login, cookie
// management and logout.

export default (
  $rootScope,
  $http,
  $state,
  lcConfig,
  $window,
  $cookieStore,
  $base64) => {
  'ngInject';
  
  var service = {};
  service.login = login;
  service.register = register;
  service.setCredentials = setCredentials;
  service.clearCredentials = clearCredentials;

  return service;

  function login(username, password, successCall, errorCall) {
    $http.post('/api/auth/authenticate', { username: username, password: password })
    .then(function success(response) {
        if (response.code === 200) {
          successCall(response);
        } else {
          errorCall(response);
        }
      }, function error(response) {
        errorCall(response);
      });

  }

  function register(username, password, successCall, errorCall) {
    $http.post('/api/auth/register', { username: username, password: password})
      .then(function success(response) {
        if (response.code === "200") {
          successCall(response);
        } else {
          errorCall(response);
        }
      }, function error(response) {
        errorCall(response);
      });
  }

  function setCredentials(username, password) {
    $http.get('/api/auth/test');
    /*
    var authData = $base64.encode(username + ":" + password);
    // Store username and password in global.
    $rootScope.globals = {
      currentUser: {
        username: username,
        authData: authData
      }
    };
    $http.defaults.headers.common.Authorization = 'Basic ' + authData;
    $cookieStore.put('globals', $rootScope.globals);*/
   
  }

  function clearCredentials() {
    delete $rootScope.globals.currentUser;
    $cookieStore.remove('globals');
    $http.defaults.headers.common.Authorization = 'Basic';
  }
};
