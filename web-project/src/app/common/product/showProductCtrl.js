export default ($log, $scope, $state, $window, lcConfig, productFac) => {
  'ngInject';
  // TODO: Use cache to store results?
  // maybe create a cl for this bug.

  $scope.products = [];
  productFac.getProductsCount().then(function(result) {
    $scope.unposted = result.unposted;
    $scope.unverified = result.unverified;
    $scope.verified = result.verified;
  }, function(error) {

  });

  $scope.showVerified = () => {
    productFac.getAllProducts(3).then(function(results) {
      $scope.products = results.products;
      $scope.products.forEach(function(product, index) {
        product.responsible.contactname = results.contactname[index];
        productFac.getLatestTrip(product);
      });
    }, function(error) {
    });
  };

  $scope.showUnverified = () => {
    productFac.getAllProducts(2).then(function(results) {
      $scope.products = results.products;
      $scope.products.forEach(function(product, index) {
        product.responsible.contactname = results.contactname[index];
        productFac.getLatestTrip(product);
      });
    }, function(error) {
    });
  };

  $scope.showUnposted = () => {
    productFac.getAllProducts(1).then(function(results) {
      $scope.products = results.products;
      $scope.products.forEach(function(product, index) {
        product.responsible.contactname = results.contactname[index];
        productFac.getLatestTrip(product);
      });
    }, function(error) {
    });
  };

  $scope.updateProducts = () => {
    var date = getLatestTrip($scope.product);
  }
};
