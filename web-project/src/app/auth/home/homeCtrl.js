/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default (authFac, $log, lcConfig,  $state, $scope, $window, commonSer, helloSer, productFac) => {
  'ngInject';
  // Need to get current user level.
  $scope.level = authFac.getUserLevel();
  $scope.logout = () => {
    authFac.logout().then(function() {
      $state.go("login");
    }, function() {
      $state.go("login");
    });
  };
};
