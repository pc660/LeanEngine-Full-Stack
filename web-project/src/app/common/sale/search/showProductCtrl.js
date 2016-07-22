/**
 * Created by chaopan on 7/3/16.
 */
export default ($scope, $state, $log, $stateParams, $uibModal, productFac, $sce) => {
  $scope.test = "123123";
  $scope.$broadcast("test");
  $scope.priceMap = {};
  productFac.getProductDetail($stateParams.productId)
    .then(function(result) {
      $scope.product = result.product;
      $scope.product.provider = result.provider;
      $scope.product.fileUrl = $sce.trustAsResourceUrl($scope.product.itineraryFile.url);
      productFac.getLatestTrip($scope.product);
      $log.log($scope.product);
      // Set the current Date.
      $scope.$broadcast("updateMaterialCalendar");
      $scope.$broadcast("updateTemplate", {params: $scope.product});
      //var date = new Date();
      //$scope.updateMonthContent({year: date.getFullYear(), month: date.getMonth()});
    }, function(error) {
      // TODO: handle failure.
    });

  $scope.selectedDate = null;
  $scope.firstDayOfWeek = 0;
  $scope.setDirection = function(direction) {
    $scope.direction = direction;
  };

  $scope.getItinerary = (index) => {
    return $sce.trustAsHtml($scope.product.itinerary[index].detail);
  }

  $scope.updateMonthContent = (data) => {
    var price = $scope.product.price;
    if (price[data.year]) {
      var month = price[data.year][data.month];
      for (i = 0; i < month.length; i++) {
        var date = new Date(data.year, data.month, i + 1);
        //$log.log(date);
        $scope.setDayContent(date);
      }
    }
  }

  $scope.prevMonth = function(data) {
    $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
  };
  $scope.nextMonth = function(data) {
    $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
  };

  $scope.dayClick = function(date) {
    $log.log(date);
    if ($scope.priceMap[date]) {
      $scope.openReserveForm();
    }
    return;
  }


  $scope.openReserveForm = () => {
    // Show the model with the result.
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/sale/search/directives/reserve/reserve.html',
      controller: 'reserveFormCtrl',
      resolve: {
        results: function () {
          return $scope.priceMap;
        }
      }
    });
    modalInstance.result.then(function (reserve) {
      $log.log();
      $state.go('sale.add-order', {productId: $scope.product.objectId, product: $scope.product, reserve: reserve});
    }, function () {
    });
  };

  $scope.setDayContent = function(date) {
    // You would inject any HTML you wanted for
    // that particular date here.
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    // Check if date in price map.
    var price = $scope.containsContent(date);
    if (price) {
      if (price.adultCompanySalePrice) {
        var adultCompanySalePrice = price.adultCompanySalePrice;
        $scope.priceMap[date] = price;
        return '<p class="cal-price">' + "￥" + adultCompanySalePrice + "</p>";
      }
    }

    return "<p></p>";
  };

  $scope.containsContent = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    if ($scope.product) {
      $log.log(date);
      var price = $scope.product.price;
      return price[year][month][day];
    }
    return null;
  }
}
