export default (SweetAlert, authFac, $log, $scope, $state, $window, $sce, $uibModal, orderFac, productFac, userFac, lcConfig) => {
  'ngInject';

  $scope.level = authFac.getUserLevel();
  $scope.orderStatus = lcConfig.orderStatus;
  $scope.admin = ($scope.level == lcConfig.orderStatus.ADMIN);
  $scope.isLoading = false;
  // Init.
  userFac.getSaleusers().then(function(results) {
    $scope.saleList = results;
  })

  $scope.search = () => {
    var query = $scope.query;
    // TODO: have to fix this. Do a real query.
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
    $log.log(results);
    $scope.orders = results.order;
    for (var i = 0; i < $scope.orders.length; i++) {
      var product = results.product[i];
      var provider = results.provider[i];
      if (product) {
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
        $scope.orders[i].provider = provider;
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

  $scope.allOrder = (status) => {
    // Clean up the orders first because we are getting the new ones.
    $scope.orders = [];
    $scope.isLoading = true;
    $scope.currentStatus = status;
    orderFac.getAllOrder(status, $scope.currentPage - 1).then(function(results) {
      $scope.setOrder(results);
      $scope.totalOrders = results.count;
      $scope.isLoading = false;
    });
  };

  $scope.showDetail = (order) => {
    $state.go('sale.show-order-detail', {orderId: orderId, isEditign: false});
  };

  $scope.paid = (order) => {
    orderFac.update(order, lcConfig.orderStatus.PAID).then(function(result) {
      SweetAlert.swal("订单付款成功", "success");
      order.status = result.status;
    });
  };

  $scope.showConfirmation = () => {
  };

  $scope.printReceipt = () => {
  };

  $scope.cancelOrder = (order) => {
    $log.log(order);
    var orderId = order.objectId;
    orderFac.cancelOrder(orderId).then(function(result) {
      SweetAlert.swal("订单取消成功", "请稍后与分销商确认", "success");
      order.status = result.status;
    }, function(error){

    });
  };

  $scope.showContact = (order) => {
    userFac.showContact(order);
  };

  $scope.applyRevoke = (order) => {
    var orderId = order.objectId;
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
  };

  $scope.applyCancel = (order) => {
    var orderId = order.objectId;
    orderFac.cancelUnpaidOrder(orderId, {reason: "未付款请求取消"}).then(function(result) {
      SweetAlert.swal("订单取消成功", "请稍后与平台方确认", "success");
      order.status = result.status;
    }, function(error){

    });
  };

  $scope.confirmRevoke = (order) => {
    $scope.cancelOrder(order);
  };

  $scope.verifyUnpaid = (order) => {
    orderFac.update(order, lcConfig.orderStatus.UNPAID_VERIFIED).then(function(result) {
      SweetAlert.swal("订单预审成功", "请通知分销商付款", "success");
      order.status = result.status;
    });
  };

  $scope.verifyPaid = (order) => {
    orderFac.update(order, lcConfig.orderStatus.PAID_VERIFIED).then(function(result) {
      SweetAlert.swal("订单付款审核通过", "请刷新网页", "success");
      order.status = result.status;
    });
  };

  $scope.verifyFinished = (order) => {
    orderFac.update(order, lcConfig.orderStatus.FINISHED).then(function(result) {
      SweetAlert.swal("订单已经完成", "请刷新网页", "success");
      order.status = result.status;
    });
  };

  $scope.editOrder = (orderId) => {
    $state.go('sale.show-order-detail', {orderId: orderId, isEditing: true});
  };

  $scope.pageChanged = () => {
    $log.log($scope.currentPage);
    $scope.allOrder($scope.currentStatus);
  };
};
