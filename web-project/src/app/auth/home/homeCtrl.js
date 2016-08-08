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
  if (authFac.getUserLevel() === lcConfig.userLevel.ADMIN) {
    $scope.admin = true;
  } else {
    $scope.admin = false;
  }

  $scope.logout = () => {
    authFac.logout().then(function() {
      $state.go("login");
    }, function() {
      $state.go("login");
    });
  };
};
