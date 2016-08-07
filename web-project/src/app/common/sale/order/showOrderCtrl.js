export default (SweetAlert, $log, $scope, $state, $window, $uibModal, orderFac, productFac, userFac) => {
  'ngInject';

  $scope.admin = false;
  if ($state.is('home.show-orders')) {
    $scope.admin = true;
  }

  $scope.allOrder = () => {
    orderFac.getAllOrder($scope.admin).then(function(results) {
      $log.log(results);
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        if (product) {
          product.prefixArray = productFac.convertProductPrefix(product.prefix);
          $scope.orders[i].product = product;
        }
      }
    });
  };

  $scope.unpaidOrder = () => {
    orderFac.getUnpaidOrder($scope.admin).then(function(results) {
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    });
  };

  $scope.paidOrder = () => {
    orderFac.getPaidOrder($scope.admin).then(function(results) {
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    });
  };

  $scope.finishedOrder = () => {
    orderFac.getFinishedOrder($scope.admin).then(function(results) {
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    });
  };

  $scope.showDetail = (orderId) => {
    $state.go('sale.show-order-detail', {orderId: orderId });
  };

  $scope.paid = (orderId) => {
    orderFac.orderGetPaid(orderId).then(function() {
      SweetAlert.swal("订单付款成功成功", "订单编号: " + orderId, "success");
    });
  };

  $scope.showConfirmation = () => {
  };

  $scope.printReceipt = () => {
  };

  $scope.cancelOrder = (orderId) => {
    orderFac.cancelOrder(orderId).then(function(result) {
      SweetAlert.swal("订单取消成功", "请稍后与平台确认", "success");
    }, function(error){

    });
<<<<<<< HEAD
=======
  }
  
  $scope.showContact = (order) => {
    $log.log(order);
    userFac.showContact(order);
>>>>>>> 3ab9384a84eb6a0437ddbe4c5d116dbab09d1773
  };
};
