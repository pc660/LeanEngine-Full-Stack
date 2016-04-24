export default ($log, $scope, lcConfig, $window, $uibModalInstance, productFac, product) => {
  'ngInject';
 
  $scope.product = product; 
  $scope.options = [
    {value: "已付款", state: lcConfig.CUSTOMER_STATE.PAID},
    {value: "未付款", state: lcConfig.CUSTOMER_STATE.UNPAID},
  ];
  
  $scope.signin = () => {
    var query = {};
    // Validate parameters.
    if (!$scope.username) {
      $window.alert("请输入姓名");
      return;
    } else {
      query.username = $scope.username;
    }

    // TODO: 身份证必须15位数字
    if (!$scope.identifier || $scope.identifier.length !== 15) {
       $window.alert("请输入有效身份证号");
       return;
    } else {
      query.identifier = $scope.identifier;
    }

    // phone number is optional.
    if ($scope.phone) {
      query.phone = $scope.phone;
    }
    
    if (!$scope.state.toString()) {
      $window.alert("请输入付款状态");
      return;
    } else {
      query.state = $scope.state;
    }
    $log.log($scope.product); 
    query.productId = $scope.product.objectId;
    query.productName = $scope.product.productname;
    query.price = $scope.product.price;
    productFac.signinUser(JSON.stringify(query))
    .then(function(result) {
      $uibModalInstance.close(result);
    }, function(error) {
      $uibModalInstance.dismiss('cancel');
    });
  };
};
