export default ($scope, $window, $uibModalInstance, results) => {
  'ngInject';
  
  // This is for previous results
  $scope.results = results; 
  // Init.
  var keys = Object.keys(results);
  for (var i = 0; i < keys.length; i++) {
    $scope[keys[i]] = results[keys[i]];
  }

  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.add = function() {
    // Fill in the results.
    $scope.results.date = $scope.date;
    $scope.results.hotel = $scope.hotel;
    $scope.results.cafe = $scope.cafe;
    $scope.results.transportation = $scope.transportation;
    $scope.results.startTime = $scope.startTime;
    $scope.results.detail = $scope.detail;
    $scope.results.start = $scope.start;
    $scope.results.end = $scope.end;
    $uibModalInstance.close($scope.results);
  };
};

