/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default ($scope, $window, commonSer, helloSer, authFac) => {
  'ngInject';

  function loginSuccess(response) {$window.alert(response);}

  function loginFail(response) {$window.alert("fail");}

  $scope.goHome = () => {
    commonSer.goHome();
  };

  $scope.register = () => {
    authFac.register("admin", "admin", loginSuccess, loginFail);
  };

  $scope.login = () => {
    authFac.login("admin", "admin", loginSuccess, loginFail);
  };

  $scope.set = () => {
    authFac.setCredentials("admin", "admin");
  };

  $scope.clear = () => {
    authFac.clearCredentials();
  };
  //helloSer.getData().then((data) => {
  //  console.log(data);
  //});
};
