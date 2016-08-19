/**
 * Created by chaopan on 7/10/16.
 */
export default (SweetAlert, $log, $scope, $state, $window, orderFac, productFac) => {
  'ngInject';
  orderFac.getOrder($state.params.orderId).then(function(result) {
    $scope.order = result.order;
    $scope.order.product.platformcontact = result.platformcontact;
    $log.log($scope.order);
  });
};
