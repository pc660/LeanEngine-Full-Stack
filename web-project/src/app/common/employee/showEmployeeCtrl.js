export default (userFac, $state, $log, $scope, $stateParams, providerFac, $document, $timeout, lcConfig, $window, fileFac, SweetAlert) => {
  'ngInject';

  $scope.updateEmployee = (employee) => {
    var id = employee.objectId;
    var countData = $scope.employeeMap[id];
    employee.providerCount = countData["provider"]["all"];
    employee.productVerifiedCount = countData["product"][lcConfig.productStatus.VERIFIED];
    employee.productUnvierifedCount = countData["product"][lcConfig.productStatus.UNVERIFIED];
    employee.productUnpostedCount = countData["product"][lcConfig.productStatus.UNPOSTED];
    employee.finishOrderCount = countData["order"][lcConfig.orderStatus.FINISHED];
    employee.cancelOrderCount = countData["order"][lcConfig.orderStatus.CANCELLED];
  };

  $scope.search = () => {
    $log.log($scope.query);
    userFac.getEmployeeList(["provider", "product", "order"], $scope.query).then(function (results) {
      $scope.employeeList = results.employeeList;
      $scope.employeeMap = results.employeeMap;
      $log.log(results);
      $scope.employeeList.forEach(function (employee) {
        // Update each employee.
        $scope.updateEmployee(employee);
      });
    })
  };
};

