export default (SweetAlert, $log, $scope, $state, $window, orderFac, productFac) => {
  'ngInject';

  $scope.allOrder = () => {
    orderFac.getAllOrder().then(function(results) {
      $log.log(results);
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    })
  };

  $scope.unpaidOrder = () => {
    orderFac.getUnpaidOrder().then(function(results) {
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    })
  }

  $scope.paidOrder = () => {
    orderFac.getPaidOrder().then(function(results) {
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    })
  }

  $scope.finishedOrder = () => {
    orderFac.getFinishedOrder().then(function(results) {
      $scope.orders = results.order;
      for (var i = 0; i < $scope.orders.length; i++) {
        var product = results.product[i];
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        $scope.orders[i].product = product;
      }
    })
  }

  $scope.showDetail = () => {
  }

  $scope.showConfirmation = () => {
  }

  $scope.printReceipt = () => {
  }

  $scope.cancelOrder = () => {
  }
};
