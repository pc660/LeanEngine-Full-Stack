export default ($log, $scope, $window, $stateParams, productFac, providerFac, multiChoiceConfig) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  $scope.isEditing = false;
  productFac.getProductDetail($stateParams.productId)
    .then(function(result) {
      $log.log(result.product);
      $scope.product = result.product;
      $scope.product.pickedProvider = result.provider;
      // Convert prefix.
      $scope.product.responsible = result.responsible;
      $scope.product.contact = result.contact;
      $scope.product.platformcontact = result.platformcontact;
      $scope.product.prefixArray = productFac.convertProductPrefix(result.product.prefix);
      $scope.$broadcast("calendarUpdate", {price: $scope.product.price});
      $scope.$broadcast("addressUpdate", {address: $scope.product.start});
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
