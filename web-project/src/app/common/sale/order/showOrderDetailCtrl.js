/**
 * Created by chaopan on 7/10/16.
 */
export default (SweetAlert, $log, authFac, $scope, $state, $window, orderFac, productFac) => {
  'ngInject';
  $scope.level = authFac.getUserLevel();
  orderFac.getOrder($state.params.orderId).then(function(result) {
    $scope.order = result.order;
    $scope.order.product = result.product;
    $scope.order.product.platformcontact = result.platformcontact;
    $log.log(result);
    $log.log($scope.order);
  });
};
