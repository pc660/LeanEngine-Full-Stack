export default (SweetAlert, authFac, $log, $scope, $state, $window, $sce, $uibModal, orderFac, productFac, userFac, lcConfig) => {
  'ngInject';

  $scope.level = authFac.getUserLevel();
  $scope.orderStatus = lcConfig.orderStatus;
  $scope.admin = ($scope.level == lcConfig.orderStatus.ADMIN);
  $scope.isLoading = false;
  $scope.count = {};
  // Init.
  userFac.getSaleusers().then(function(results) {
    $scope.saleList = results;
  })

  orderFac.getCount().then(function(results) {
    var index = 0;
    for (var i in lcConfig.orderStatus) {
      $scope.count[lcConfig.orderStatus[i]] = results[index];
      index++;
    }
  });

  $scope.search = () => {
    $scope.allOrder($scope.currentStatus);
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
    if ($scope.currentStatus != status) {
      // Clean query.
      $scope.query = {};
    }
    $scope.currentStatus = status;
    orderFac.getAllOrder(status, $scope.currentPage - 1, $scope.query).then(function(results) {
      $log.log(results);
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

  $scope.cancelUnpaid = (order) => {
    SweetAlert.swal({
        title: "取消该未付款订单",
        text: "该操作不可取消,完成后请与分销商确认",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",confirmButtonText: "确认取消",
        cancelButtonText: "取消该操作",
        closeOnConfirm: true,
        closeOnCancel: true },
      function(isConfirm){
        if (isConfirm) {
          $scope.cancelOrder(order);
        } else {
        }
      });
  };
};
