export default ($sce, $log, $scope, $window, $stateParams, productFac, providerFac, multiChoiceConfig) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  $scope.isEditing = false;
  $scope.product = {};
  productFac.getProductDetail($stateParams.productId)
    .then(function(result) {
      $scope.product = result.product;
      $scope.product.pickedProvider = result.provider;
      // Convert prefix.
      $scope.product.responsible = result.responsible;
      $scope.product.contact = result.contact;
      $scope.product.platformcontact = result.platformcontact;
      $scope.product.prefixArray = productFac.convertProductPrefix(result.product.prefix);
      $scope.$broadcast("updateMaterialCalendar");
      $log.log("get product detail");
      $log.log($scope.product);
      $scope.fileUrl = $sce.trustAsResourceUrl($scope.product.itineraryFile.url);
    }, function(error) {
      // TODO: handle failure.
    });

  $scope.updateProviders = () => {
    for(var i = 0; i < $scope.pickedProviders.length; i++) {
      getReturnPolicy(i);
    }
  };

  $scope.setDayContent = (date) => {
    return productFac.setDayContent(date, $scope.product);
  };


  $scope.dayClick = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    $scope.currentPrice = productFac.getPrice(year, month, day, $scope.product);
    $scope.currentPrice.year = year;
    $scope.currentPrice.month = month;
    $scope.currentPrice.day = day;
  };

  function getReturnPolicy(index) {
    var id = $scope.pickedProviders[index].id;
    $scope.pickedProviders[index].returnPolicy = "正在获取返利信息...";
    providerFac.getReturnPolicyDetail(id)
      .then(function(result) {
        $scope.pickedProviders[index].returnPolicy = providerFac.util.getReturnPolicy(result);
      }, function(error) {
      });
  }
};
