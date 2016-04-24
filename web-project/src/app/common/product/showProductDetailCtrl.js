export default ($log, $scope, $window, $stateParams, productFac, providerFac) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  $scope.isEditing = false;
  productFac.getProductDetail($stateParams.productId)
    .then(function(result) {
      $scope.product = result;
      $scope.pickedProviders = JSON.parse($scope.product.providers);
      $scope.updateProviders();
      $scope.$broadcast("valueUpdate");
      $scope.price = $scope.product.costprice;
      $scope.itinerary = JSON.parse($scope.product.itinerary);
    }, function(error) {
      // TODO: handle failure.
    });

  $scope.updateProviders = () => {
    for(var i = 0; i < $scope.pickedProviders.length; i++) {
      getReturnPolicy(i); 
    }
  };

  function getReturnPolicy(index) {
    var id = $scope.pickedProviders[index].id;
    $scope.pickedProviders[index].returnPolicy = "正在获取返利信息...";
    providerFac.getReturnPolicyDetail(id)
      .then(function(result) {
        $scope.pickedProviders[index].returnPolicy = providerFac.util.getReturnPolicy(result);      
        $log.log(result);
      }, function(error) {
      });
  }
};
