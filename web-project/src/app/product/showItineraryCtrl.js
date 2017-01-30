export default ($log, $scope, $stateParams, $window, lcConfig, itineraryFac, productFac) => {
  'ngInject';
  $scope.product = [];

  // get product.
  productFac.getProductDetail($stateParams.productId)
    .then(function(result) {
      $scope.product = result;
      $scope.itinerarys = JSON.parse(result.itinerary);
      // Set itineray date
      for (var i = 0; i < $scope.itinerarys.length; i++) {
        var date = $scope.itinerarys[i].date;
        $scope.itinerarys[i].date = $scope.convertDate(date);
      }
      $log.log($scope.itinerary);
    }, function(response) {
      $window.alert("didn't find productId");
    });
  
  // Maybe move this to a util service.
  $scope.convertDate = (dateString) => {
    var date = new Date(dateString);
    var day = date.getDate();
    var monthIndex = parseInt(date.getMonth()) + 1;
    var year = date.getFullYear();
    return year + "年" + monthIndex + "月" + day + "日";
  };
};
