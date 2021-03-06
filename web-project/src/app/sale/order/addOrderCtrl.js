export default (SweetAlert, $log, $scope, $state, $window, lcConfig, productFac, $stateParams, orderFac) => {
  'ngInject';

  // TODO: Use url instead of state to manage this.
  $scope.licenseList = ["护照", "身份证"];
  $scope.sexList = ["男", "女"];
  $scope.types = ["成人", "小孩"];
  $scope.order = {};
  $scope.isEditing = false;
  if ($state.params.orderId) {
    $scope.isEditing = $state.params.isEditing;
    orderFac.getOrder($state.params.orderId).then(function(result) {
      $scope.order = result.order;
      $scope.order.date = result.order.startDate;
      $scope.product = result.product;
      $scope.product.platformcontact = result.platformcontact;
    });
  } else {
    initFromScratch();
  }

  function initFromScratch() {
    $scope.reserve = $state.params.reserve;
    $scope.product = $state.params.product;
    var productId = $state.params.productId;
    $scope.order.price = $scope.reserve.price;
    $scope.order.date = $scope.reserve.date;
    $scope.order.adult = $scope.reserve.adult || 0;
    $scope.order.child = $scope.reserve.child || 0;
    if (!$scope.order) {
      $scope.order = {};
    }
    $scope.order.customers = [];
    $scope.order.extraItems = [];
    var length = 0;
    if ($scope.order) {
      length = $scope.order.adult + $scope.order.child;
    }
    for (var i = 0; i < length; i++) {
      $scope.order.customers.push({"index": i + 1});
    }

    // TODO: Need to pick one.
    if (!$scope.product) {
      productFac.getProductDetail(productId).then(function(result) {
        $scope.product = result.product;
        $scope.product.provider = result.provider;
      });
    }
  }

  $scope.$watch("order.adult", function(newValue, oldValue) {
    if ($scope.isEditing) {
      $scope.isEditing = false;
      return;
    }
    $scope.updateTotalPrice();
    if (oldValue < newValue) {
      $scope.order.customers.push({});
    } else if (oldValue > newValue) {
      $scope.order.customers.pop();
    }
  });

  $scope.$watch("order.child", function(newValue, oldValue) {
    if ($scope.isEditing) {
      $scope.isEditing = false;
      return;
    }
    $scope.updateTotalPrice();
    if (oldValue < newValue) {
      $scope.order.customers.push({});
    } else if (oldValue > newValue) {
      $scope.order.customers.pop();
    }
  });

  $scope.$watch("order.customers", function(newValue, oldValue) {
    $log.log($scope.order.customers);
    $scope.order.extraRoomNumber = 0;
    for (var index in $scope.order.customers) {
      var customer = $scope.order.customers[index];
      if (customer.needExtra) {
        $scope.order.extraRoomNumber++;
      }
    }
    $scope.updateTotalPrice();
  }, true);

  $scope.updateTotalPrice = () => {
    if ($scope.order && $scope.order.price) {
      $scope.order.totalPrice = $scope.order.adult * $scope.order.price.adultCompanySalePrice +
        $scope.order.child * $scope.order.price.childCompanySalePrice;
      if ( $scope.order.extraRoomNumber) {
        $scope.order.totalPrice += $scope.order.extraRoomNumber * $scope.order.price.singleRoomDifference;
      }
      for (var i = 0; i < $scope.order.extraItems.length; i++) {
        $scope.order.totalPrice += $scope.order.extraItems[i].totalPrice;
      }
    } else {
      $scope.order = {};
      $scope.order.totalPrice = 0;
    }
  };

  $scope.submitOrder = () => {
    $scope.order.productId = $scope.product.objectId;
    orderFac.submitOrder($scope.order, $scope.reserve).then(function(result) {
      $log.log("success");
      SweetAlert.swal("订单成功", "订单编号: " + result.objectId + " 请及时联系平台负责人确认订单情况.", "success");
      $state.go("sale");
    }, function(error) {
      SweetAlert.swal("订单添加失败", "请联系计调员确认是否有余位", "warning");
    });
  };

  $scope.addItem = () => {
    var extraItem = $scope.extraItem;
    if (!(extraItem.name && extraItem.count && extraItem.price)) {
      SweetAlert.swal("请完整输入补差价项目", "", "warning");
      return;
    }

    extraItem.totalPrice = extraItem.count * extraItem.price;
    $scope.order.totalPrice += extraItem.totalPrice;
    $scope.order.extraItems.push(extraItem);
    $scope.extraItem = {};
  };

  $scope.deleteItem = (index) => {
    var extraItem = $scope.order.extraItems[index];
    $scope.order.totalPrice -= extraItem.totalPrice;
    $scope.order.extraItems.splice(index, 1);
  };
};
