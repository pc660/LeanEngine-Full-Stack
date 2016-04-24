export default (productFac, $scope, $window, $log, $uibModalInstance) => {
  'ngInject';
  var INT_MAX = 1000000;

  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.search = () => {
    var query = {};
    // Init query.
    query.priceMin = 0;
    query.priceMax = INT_MAX;
    query.dayMin = 0;
    query.dayMax = INT_MAX;
    
    // First, we need to validate the search parameters.
    if (!$scope.keyword) {
      $window.alert("请输入关键词");
    } else {
      query.keyword = $scope.keyword;
    }
   
    // TODO: add validate for number directly on the input field. 
    // There should be one that we can use.
    if (!$scope.priceLimit) {
      // TODO: use a nice alert box.
      if (!$scope.priceMin) {
        $window.alert("请输入价格最小值");
        return;
      } else {
        query.priceMin = $scope.priceMin;
      }

      if (!$scope.priceMax) {
        $window.alert("请输入价格最大值");
        return;
      } else {
        query.priceMax = $scope.priceMax;
      }
    }

    if (!$scope.startLimit) {
      if (!$scope.startDate) {
        $window.alert("请输入开始时间");
        return;
      } else {
        query.startDate = new Date($scope.startDate).getTime();
      }
      
      if ($scope.endDate) {
        query.endDate = new Date($scope.endDate).getTime();
      }
    }
    query.dayMin = $scope.dayMin;
    query.dayMax = $scope.dayMax;
    // start search.
    productFac.searchProduct(JSON.stringify(query))
      .then(function(results) {
        $uibModalInstance.close(results);
      }, function(response) {
        // TODO: add error message.
        $uibModalInstance.close([]);  
      });
  };

  $scope.days = [
    {string: "无限制"}, 
    {string: "1日"}, 
    {string: "2日"}, 
    {string: "3日"}, 
    {string: "4日"},
    {string: "5日"},
    {string: "6日"}, 
    {string: "7-8日"},
    {string: "9-10日"},
    {string: "10日以上"}
  ];
   
  $scope.startLimit = true;
  $scope.dayLimit = true;
  $scope.priceLimit = true;
  $scope.setPriceLimit = () => {
    $scope.priceLimit = true;
    $scope.priceMin = null;
    $scope.priceMax = null;
  };

  $scope.setStartLimit = () => {
    $scope.startLimit = true;
    $scope.startDate = null;
    $scope.endDate = null;
  };

  $scope.setPriceBlur = () => {
    // Check if one of the price is not empty.
    if ($scope.priceMin !== null || $scope.priceMax !== null) {
      $scope.priceLimit = false; 
    } else {
      $scope.priceLimit = true;
    }
  };

  // TODO: Validate time.
  $scope.setStartBlur = () => {
    if ($scope.startDate || $scope.endDate) {
      $scope.startLimit = false;
    } else {
      $scope.startLimit = true;
    }
  };

  $scope.setDay = (index) => {
    $scope.setDayNumber($scope.days[index]);
    $scope.dayMin = $scope.days[index].min;
    $scope.dayMax = $scope.days[index].max;
  };

  /**
  * Set the value of the days based on its string value.
  * @param day one of the days stored in $scope.days.
  * */
  $scope.setDayNumber = (day) => {
    if (day.string === "无限制") {
      day.min = 0;
      day.max = 99999999;
      return;
    }
   
    var index = day.string.indexOf("-");
    var dayIndex = day.string.indexOf("日");
    if (index >= 0) {
      day.min = parseInt(day.string.substring(0, index));
      day.max = parseInt(day.string.substring(index + 1, dayIndex));
      return;
    }
    
    if (dayIndex === day.string.length - 1) {
      day.min = parseInt(day.string.substring(0, dayIndex));
      day.max = day.min;
      return;
    } else if (dayIndex === day.string.length - 3) {
      day.min = parseInt(day.string.substring(0, dayIndex));
      day.max = INT_MAX;
      return;
    } else {
      $log.log("sth is wrong here, need to check!");
      return;
    }
  };
};
