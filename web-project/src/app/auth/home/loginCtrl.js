
export default (SweetAlert, lcConfig, $location, $scope, $window, $log, commonSer, helloSer, authFac) => {
  'ngInject';

  $log.log("getting levels");
  $scope.levels = [
    {level: 2, value: "供应商"},
    {level: 1, value:  "分销商"},
    {level: 3, value:  "计调员"},
  ];

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
    $log.log($scope.level);
    $log.log($scope.email);
    $log.log($scope.cellphone);
    if (! ($scope.username && $scope.password && $scope.email && $scope.contactname && $scope.cellphone)) {
      SweetAlert.swal("请完善注册信息!", "", "warning");
      return;
    }
    authFac.register($scope.username, $scope.password, $scope.level, $scope.email, $scope.contactname, $scope.cellphone).then(function() {
      SweetAlert.swal("账号注册成功", "请保存这条信息,并告知对方.账号: " + $scope.username + " 密码: " + $scope.password, "success");
    });
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
          case lcConfig.userLevel.PROVIDER: {
            $location.path("/admin");
            break;
          }
          case lcConfig.userLevel.ORGANIZER: {
            $location.path("/admin");
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
        $window.alert("用户名密码错误!-");
      });
  };
};
