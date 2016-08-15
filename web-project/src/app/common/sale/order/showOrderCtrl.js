export default (SweetAlert, $log, $scope, $state, $window, $sce, $uibModal, orderFac, productFac, userFac, lcConfig) => {
  'ngInject';

  $scope.admin = false;
  if ($state.is('home.show-orders')) {
    $scope.admin = true;
  }

  $scope.setOrder = (results) => {
    $scope.orders = results.order;
    for (var i = 0; i < $scope.orders.length; i++) {
      var product = results.product[i];
      if (product) {
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    }
    $scope.orders.map(function(order) {
      if (order.confirmFile) {
        order.fileUrl = $sce.trustAsResourceUrl(order.confirmFile.url);
        $log.log(order.fileUrl);
      }
    });
  }

  $scope.allOrder = () => {
    orderFac.getAllOrder($scope.admin).then(function(results) {
      $scope.setOrder(results);
    });
  };

  $scope.unpaidOrderUnverified = () => {
    orderFac.getUnpaidOrder($scope.admin, false).then(function(results) {
      $scope.setOrder(results);
    });
  };

  $scope.unpaidOrderVerified = () => {
    orderFac.getUnpaidOrder($scope.admin, true).then(function(results) {
      $scope.setOrder(results);
    });
  };

  $scope.paidOrder = () => {
    orderFac.getPaidOrder($scope.admin).then(function(results) {
      $scope.setOrder(results);
    });
  };

  $scope.finishedOrder = () => {
    orderFac.getFinishedOrder($scope.admin).then(function(results) {
      $scope.setOrder(results);
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
  };

  $scope.showContact = (order) => {
    $log.log(order);
    userFac.showContact(order);
  };

  $scope.applyRevoke = (orderId) => {
    orderFac.revokeOrder(orderId, lcConfig.orderStatus.REVOKE).then(function(result) {
      SweetAlert.swal("订单申请退款成功", "请稍后与分销商确认", "success");
    }, function(error){

    });
  };

  $scope.applyCancel = (orderId) => {
    orderFac.revokeOrder(orderId, lcConfig.orderStatus.CANCEL).then(function(result) {
      SweetAlert.swal("订单取消成功", "请稍后与分销商确认", "success");
    }, function(error){

    });
  };

  $scope.getRevoke = () => {
    orderFac.getRevoke().then(function(results) {
      $log.log(results);
      $scope.setOrder(results);
    });
  };

  $scope.confirmRevoke = (orderId) => {
    $scope.cancelOrder(orderId);
  };

  $scope.verifyUnpaid = (orderId) => {
    orderFac.verify(orderId, lcConfig.orderStatus.UNPAID_VERIFIED).then(function(results) {
      SweetAlert.swal("订单预审成功", "请通知分销商付款", "success");
    });
  };

  $scope.verifyPaid = (orderId) => {
    orderFac.verify(orderId, lcConfig.orderStatus.FINISHED).then(function(results) {
      SweetAlert.swal("订单已经完成", "请刷新网页", "success");
    });
  };
};
