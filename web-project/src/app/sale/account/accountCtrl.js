export default ($rootScope, authFac, $log, $state, $scope, SweetAlert, userFac) => {
  'ngInject';
  $scope.changePass = () => {
    authFac.changePass().then(function() {
      SweetAlert.swal("请到您的邮箱中接受重置密码的邮件");
    })
  };

  userFac.getCurrentUserInfo().then(function(result) {
    $scope.user = result;
  }, function(error) {

  });
};
