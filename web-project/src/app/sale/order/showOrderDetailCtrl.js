/**
 * Created by chaopan on 7/10/16.
 */
export default (SweetAlert, $log, authFac, $scope, $state, $window, orderFac, productFac) => {
  'ngInject';

  $scope.level = authFac.getUserLevel();
  $scope.licenseList = ["护照", "身份证"];
  $scope.sexList = ["男", "女"];
  $scope.types = ["成人", "小孩"];
  $scope.isEditing = $state.params.isEditing;
  orderFac.getOrder($state.params.orderId).then(function(result) {
    $scope.order = result.order;
    $log.log($scope.order);
    $scope.product = result.product;
    $scope.product.platformcontact = result.platformcontact;
  });

  $scope.changeOrder = () => {
    $log.log($scope.order);
    orderFac.updateCustomerInfo($scope.order).then(function() {
      SweetAlert.swal("订单修改成功", "success");
      $state.go("sale");
    });
  };
};
