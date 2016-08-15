// A service that manages user authentications including login, cookie
// management and logout.

export default (
  $rootScope,
  $http,
  $state,
  lcConfig,
  $window,
  $log,
  $cookies,
  $base64) => {
  'ngInject';

  var service = {};
  service.isLoggedin = isLoggedin;
  service.getUserLevel = getUserLevel;
  service.login = login;
  service.register = register;
  service.logout = logout;
  service.cookie = null;
  service.changePass = changePass;
  return service;

  function getUserLevel() {
    if (!isLoggedin()) {
      return lcConfig.userLevel.UNKNOWN;
    }

    var level = service.cookie.level;
    if (level === undefined) {
      return lcConfig.userLevel.UNKNOWN;
    }
    return level;
  }

  function isLoggedin() {
    var cookie = $cookies.get('user');
    if (cookie === undefined) {
      $log.log("no cookie");
      return false;
    }
    service.cookie = JSON.parse(cookie);
    return true;
  }

  function login(username, password) {
    return $http.post('/api/auth/authenticate',
                      { username: username, password: password });
  }

  function register(username, password, level, email, contactname ) {
    $log.log(level);
    return $http.post('/api/auth/register',
                      { username: username, password: password, level: level, email: email, contactname: contactname});
  }

  function logout() {
    return $http.post('/api/auth/logout');
  }

  function changePass() {
    return $http.post('/api/auth/changePass');
  }
};
