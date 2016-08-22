export default ($scope, $log, SweetAlert, $window, $uibModalInstance, orderFac, data) => {
  'ngInject';

  $log.log(data.orderId);

  // TODO: Refactor this.
  $scope.cancelRevoke = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.revokeOrder =  (revoke) => {
    orderFac.revokeOrder(data.orderId, revoke).then(function(results) {
      SweetAlert.swal("退款申请成功", "请联系计调员确认.", "success");
      $uibModalInstance.close();
    })
  };
};
