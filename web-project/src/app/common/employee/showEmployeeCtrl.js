export default (userFac, $state, $log, $scope, $stateParams, providerFac, $document, $timeout, lcConfig, $window, fileFac, SweetAlert) => {
  'ngInject';
  userFac.getEmployeeList(["provider", "product", "order"]).then(function (results) {
    $scope.employeeList = results.employeeList;
    $scope.employeeMap = results.employeeMap;
    $log.log(results);
    $scope.employeeList.forEach(function (employee) {
      // Update each employee.
      $scope.updateEmployee(employee);
    });
  })

  $scope.updateEmployee = (employee) => {
    var id = employee.objectId;
    var countData = $scope.employeeMap[id];
    employee.providerCount = countData["provider"]["all"];
    employee.orderCount = countData["order"]["all"];
    employee.productVerifiedCount = countData["product"][lcConfig.productStatus.VERIFIED];
    employee.productUnvierifedCount = countData["product"][lcConfig.productStatus.UNVERIFIED];
    employee.productUnpostedCount = countData["product"][lcConfig.productStatus.UNPOSTED];
  };
};

