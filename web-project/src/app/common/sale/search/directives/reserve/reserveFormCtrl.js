export default (SweetAlert, $scope, $log, $window, $uibModalInstance, results, adult, child, date) => {
  'ngInject';

  // This is for previous results
  $scope.results = results;
  $scope.reserve = {};
  $scope.reserve.adult = adult;
  $scope.reserve.child = child;
  $log.log(results);
  // Init.
  var keys = Object.keys(results);
  keys.sort();
  $scope.selectedIndex = keys.indexOf(date + "");
  $scope.date = date + "";
  $scope.priceArray = keys.map(function(key) {
    var object = {};
    var date = new Date(key);
    var dateString = date.getFullYear() + "年" + (date.getMonth() + 1)+ "月" + date.getDate() + "日";
    object.date = dateString;
    object.adultCompanySalePrice = results[key].adultCompanySalePrice;
    object.childCompanySalePrice = results[key].childCompanySalePrice;
    return object;
  });
  //$scope.reserve.date = $scope.priceArray[0].date;

    $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.close = function () {
    if (!$scope.reserve.date) {
      SweetAlert.swal({
        title: "请选择日期",
        type: "warning"});
      return;
    }
    var result = {};
    for (var i = 0; i < $scope.priceArray.length; i++) {
      if ($scope.priceArray[i].date === $scope.reserve.date) {
        result = $scope.priceArray[i];
      }
    }
    $scope.reserve.adultCompanySalePrice = result.adultCompanySalePrice;
    $scope.reserve.childCompanySalePrice = result.childCompanySalePrice;
    $uibModalInstance.close($scope.reserve);
  };
};

