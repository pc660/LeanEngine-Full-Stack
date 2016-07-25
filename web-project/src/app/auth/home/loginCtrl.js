
export default (lcConfig, $location, $scope, $window, $log, commonSer, helloSer, authFac) => {
  'ngInject';

  function loginSuccess() {
    $log.log("login success");
    commonSer.goAddProvider();
  }

  function loginFail() {}

  $scope.goHome = () => {
    commonSer.goHome();
  };


  $scope.logout = () => {
    authFac.logout();
  };

  $scope.register = () => {
    authFac.register($scope.username, $scope.password);
  };

  $scope.login = () => {
    authFac.login($scope.username, $scope.password)
      .success(function(user) {
        var level = authFac.getUserLevel();
        switch (level) {
          case lcConfig.userLevel.ADMIN: {
            $location.path("/admin");
            break;
          }
          case lcConfig.userLevel.SALE: {
            $log.log("/sale");
            $location.path("/sale");
            break;
          }
          default: {
            $log.log("Unknown user, should not happen!!");
            break;
          }
        }
      })
      .error(function(response) {
        // TODO: Use a nicer UI and translate..
        $window.alert("login failed");
      });
  };
};
