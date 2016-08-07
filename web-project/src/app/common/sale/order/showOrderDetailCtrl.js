/**
 * Created by chaopan on 7/10/16.
 */
export default (SweetAlert, $log, $scope, $state, $window, orderFac, productFac) => {
  'ngInject';
  orderFac.getOrder($state.params.orderId).then(function(order) {
    $scope.order = order;
    $log.log($scope.order);
  });
};
