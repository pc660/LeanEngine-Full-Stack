export default (SweetAlert, $log, $scope, $state, $window, lcConfig, productFac, $stateParams, orderFac) => {
  'ngInject';

  // TODO: Use url instead of state to manage this.
  $scope.licenseList = ["护照", "身份证"];
  $scope.sexList = ["男", "女"];
  $scope.types = ["成人", "小孩"];
  $scope.order = {};
  $scope.reserve = $state.params.reserve;
  $scope.product = $state.params.product;
  var productId = $state.params.productId;
  $scope.order.price = $scope.reserve.price;
  $scope.order.date = $scope.reserve.date;
  $scope.order.adult = $scope.reserve.adult || 0;
  $scope.order.child = $scope.reserve.child || 0;
  $log.log($scope.reserve);
  $log.log("get scope order");
  $log.log($scope.order);
  if (!$scope.order) {
    $scope.order = {};
  }
  $scope.order.customers = [];
  var length = 0;
  if ($scope.order) {
    length = $scope.order.adult + $scope.order.child;
  }
  $log.log(length);
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

  $scope.$watch("order.adult", function(newValue, oldValue) {
    $scope.updateTotalPrice();
    if (oldValue < newValue) {
      $scope.order.customers.push({});
    } else if (oldValue > newValue) {
      $scope.order.customers.pop();
    }
  });

  $scope.$watch("order.child", function(newValue, oldValue) {
    $scope.updateTotalPrice();
    if (oldValue < newValue) {
      $scope.order.customers.push({});
    } else if (oldValue > newValue) {
      $scope.order.customers.pop();
    }
  });

  $scope.updateTotalPrice = () => {
    if ($scope.order) {
      $scope.order.totalPrice = $scope.order.adult * $scope.order.price.adultCompanySalePrice +
        $scope.order.child * $scope.order.price.childCompanySalePrice;
      $log.log($scope.order);
    } else {
      $scope.order = {};
      $scope.order.totalPrice = 0;
    }
  };

  $scope.submitOrder = () => {
    $scope.order.productId = $scope.product.objectId;
    $log.log($scope.order.productId);
    $log.log($scope.order);
    orderFac.submitOrder($scope.order, $scope.reserve).then(function(result) {
      $log.log("success");
      SweetAlert.swal("订单成功", "订单编号: " + result.objectId + " 请及时联系平台负责人确认订单情况.", "success");
    });
  };
};
