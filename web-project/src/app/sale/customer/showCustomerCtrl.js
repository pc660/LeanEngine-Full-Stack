export default ($log, $scope, $document, $state, lcConfig, $window, customerFac) => {
  'ngInject';
  $scope.pages = [1, 2, 3, "..."];
  $scope.customers = []; 
  $scope.search = () => {
    // TODO: validate all parameters.
    var query = {};
    if ($scope.username) {
      query.username = $scope.username;
    }
    if ($scope.identifier) {
      query.identifier = $scope.identifier;
    }
    if ($scope.productId) {
      query.productId = $scope.productId;
    }
    if ($scope.state) {
      query.state = $scope.state;
    }
    
    if (Object.keys(query).length === 0) {
      $window.alert("请输入关键字");
      return;
    }
   
    customerFac.search(JSON.stringify(query))
    .then(function(results) {
      $log.log(results);
      $scope.customers = results;
      // set customer paid state.
      for (var i = 0; i < $scope.customers.length; i++) {
        var customer = $scope.customers[i];
        switch (customer.state) {
          case lcConfig.CUSTOMER_STATE.UNPAID:
            customer.stateText = "未付款";
            break;
          case lcConfig.CUSTOMER_STATE.PAID:
            customer.stateText = "已付款";
            break;
        }
      }
    }, function(response) {
      // TODO: handle error. 
    });   
  };
};
