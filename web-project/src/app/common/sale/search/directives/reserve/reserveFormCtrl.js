export default ($scope, $log, $window, $uibModalInstance, results) => {
  'ngInject';

  // This is for previous results
  $scope.results = results;
  $log.log(results);
  // Init.
  var keys = Object.keys(results);
  keys.sort();
  $scope.priceArray = keys.map(function(key) {
    var object = {};
    var date = new Date(key);
    $log.log(date.getDate());
    $log.log(date);
    var dateString = date.getFullYear() + "年" + (date.getMonth() + 1)+ "月" + date.getDate() + "日";
    object.date = dateString;
    object.adultCompanySalePrice = results[key].adultCompanySalePrice;
    object.childCompanySalePrice = results[key].childCompanySalePrice;
    return object;
  });

  $log.log($scope.priceArray);

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.close = function () {
    var result = {};
    for (var i = 0; i < $scope.priceArray.length; i++) {
      if ($scope.priceArray[i].date == $scope.reserve.date) {
        result = $scope.priceArray[i];
      }
    }
    $scope.reserve.adultCompanySalePrice = result.adultCompanySalePrice;
    $scope.reserve.childCompanySalePrice = result.childCompanySalePrice;
    $uibModalInstance.close($scope.reserve);
  };
};

