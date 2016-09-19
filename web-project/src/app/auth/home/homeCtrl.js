/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default (authFac, $log, lcConfig,  $state, $scope, $window, commonSer, helloSer, productFac) => {
  'ngInject';
  // Need to get current user level.
  $log.log(authFac.getUserLevel());
  $scope.level = authFac.getUserLevel();
  //username, password, level, email, contactname, cellphone
  /*
  if (authFac.getUserLevel() === lcConfig.userLevel.ADMIN) {
    $scope.admin = true;
  } else {
    $scope.admin = false;
  }

  if (authFac.getUserLevel() === lcConfig.userLevel.ORGANIZER) {
    $scope.organizer = true;
  } else {
    $scope.organizer = false;
  }

  if (authFac.getUserLevel() === lcConfig.userLevel.PROVIDER) {
    $scope.isProvider = true;
  } else {
    $scope.isProvider = false;
  }*/

  $scope.logout = () => {
    authFac.logout().then(function() {
      $state.go("login");
    }, function() {
      $state.go("login");
    });
  };
};
