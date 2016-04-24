export default ($scope, $state, $window, lcConfig, productFac) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  $scope.products = [];
  productFac.getAllProducts(success, fail);
  
  function success(results) {
    $scope.products = results;
  }

  // handle error
  function fail() {
  }
};
