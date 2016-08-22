export default (SweetAlert, authFac, $log, $scope, $state, $window, $sce, $uibModal, orderFac, productFac, userFac, lcConfig) => {
  'ngInject';

  $scope.level = authFac.getUserLevel();
  $scope.admin = ($scope.level == lcConfig.orderStatus.ADMIN);
  // Init.
  userFac.getSaleusers().then(function(results) {
    $scope.saleList = results;
  })

  $scope.search = () => {
    var query = $scope.query;
    // TODO: have to fix this. Do a real query.
    /*
    orderFac.search(query).then(function(results) {
      $scope.setOrder(results);
    })*/
    if (!query) {
      return;
    }
    $log.log(query);
    $scope.orders = $scope.oldOrders.filter(function(order) {
      $log.log(order);
      if (query.orderId) {
        return order.objectId == query.orderId;
      }
      var match = true;
      var date = productFac.parseDate(order.startDate);
      if (query.startDate) {
        var queryDate = productFac.parseDate(query.startDate);
        if (queryDate > date) {
          match = false;
        }
      }
      if (query.endDate) {
        var queryDate = productFac.parseDate(query.endDate);
        if (queryDate < date) {
          match = false;
        }
      }
      if (query.sale) {
        if (order.createdBy.objectId !== query.sale) {
          match = false;
        }
      }
      if (query.productName) {
        if (order.product && !order.product.fullName.includes(query.productName)) {
          match = false;
        }
      }
      return match;
    })
  };

  $scope.setOrder = (results) => {
    $scope.orders = results.order;
    for (var i = 0; i < $scope.orders.length; i++) {
      var product = results.product[i];
      if (product) {
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    }
    $scope.orders.forEach(function(order) {
      if (order.confirmFile) {
        order.fileUrl = $sce.trustAsResourceUrl(order.confirmFile.url);
        $log.log(order.fileUrl);
      }
    });

    $log.log($scope.orders);
    // TODO: Remove this.
    $scope.oldOrders = $scope.orders;
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

  $scope.paidVerifiedOrder = () => {
    orderFac.getPaidVerifiedOrder($scope.admin).then(function(results) {
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

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/sale/order/apply_revoke.html',
      controller: 'applyRevokeCtrl',
      resolve: {
        data: function() {
          return {"orderId": orderId};
        }
      }
    });

    modalInstance.result.then(function (items) {
      $log.log("return");
    }, function () {
      $log.log("return error");
    });


    /*
    orderFac.revokeOrder(orderId, lcConfig.orderStatus.REVOKE).then(function(result) {
      SweetAlert.swal("订单申请退款成功", "请稍后与分销商确认", "success");
    }, function(error){

    });*/
  };

  /*
  $scope.cancelRevoke = () => {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.revokeOrder = (revoke) => {
    $uibModalInstance.close();
  };*/

  $scope.applyCancel = (orderId) => {
    orderFac.revokeOrder(orderId, lcConfig.orderStatus.CANCEL).then(function(result) {
      SweetAlert.swal("订单取消成功", "请稍后与分销商确认", "success");
    }, function(error){

    });
  };

  $scope.getRevoke = () => {
    orderFac.getRevoke($scope.admin).then(function(results) {
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
    orderFac.verify(orderId, lcConfig.orderStatus.PAID_VERIFIED).then(function(results) {
      SweetAlert.swal("订单付款审核通过", "请刷新网页", "success");
    });
  };

  $scope.verifyFinished = (orderId) => {
    orderFac.verify(orderId, lcConfig.orderStatus.FINISHED).then(function(results) {
      SweetAlert.swal("订单已经完成", "请刷新网页", "success");
    });
  };

  $scope.getCancel = () => {
    orderFac.getCancel($scope.admin).then(function(results) {
      $log.log(results);
      $scope.setOrder(results);
    });
  };
};
