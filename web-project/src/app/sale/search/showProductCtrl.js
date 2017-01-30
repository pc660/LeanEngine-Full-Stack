/**
 * Created by chaopan on 7/3/16.
 */
export default ($scope, $state, $log, $stateParams, $uibModal, productFac, $sce) => {
  $scope.priceMap = {};
  $scope.product = {};
  productFac.getProductDetail($stateParams.productId)
    .then(function(result) {
      $scope.product = result.product;
      $scope.product.contact = result.contact;
      $scope.product.provider = result.provider;
      if ($scope.product.itineraryFile) {
        $scope.product.fileUrl = $sce.trustAsResourceUrl($scope.product.itineraryFile.url);
      }
      $scope.product.platformcontact = result.platformcontact;
      productFac.getLatestTrip($scope.product);
      $log.log("getting result finish*****");
      // Set the current Date.
      $scope.updatePriceMap();
      $scope.$broadcast("updateMaterialCalendar");
      $scope.$broadcast("updateTemplate", {params: $scope.product});
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
  };

  $scope.updateMonthContent = (data) => {
    var price = $scope.product.price;
    if (price[data.year]) {
      var month = price[data.year][data.month];
      for (var i = 0; i < month.length; i++) {
        var date = new Date(data.year, data.month, i + 1);
        //$log.log(date);
        $scope.setDayContent(date);
      }
    }
  };

  $scope.prevMonth = function(data) {
    $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
  };
  $scope.nextMonth = function(data) {
    $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
  };

  $scope.order = function() {
    $log.log($scope.adult);
    $scope.openReserveForm($scope.adult, $scope.child);
  };

  $scope.dayClick = function(date) {
    if ($scope.priceMap[date]) {
      $scope.openReserveForm(0, 0, date);
    }
    return;
  };


  $scope.openReserveForm = (adult, child, date) => {
    var price = $scope.priceMap[date];
    // Show the model with the result.
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/sale/search/directives/reserve/reserve.html',
      controller: 'reserveFormCtrl',
      resolve: {
        results: function () {
          return $scope.priceMap;
        },
        adult: function() {
          return adult;
        },
        child: function() {
          return child;
        },
        date: function() {
          return date;
        }
      }
    });
    modalInstance.result.then(function (reserve) {
      $state.go('sale.add-order', {productId: $scope.product.objectId, product: $scope.product, reserve: reserve});
    }, function () {
    });
  };

  $scope.updatePriceMap = () => {
    var price = $scope.product.price;
    for (var year in price) {
      for (var month in price[year]) {
        for (var day in price[year][month]) {
          var currentPrice = productFac.getPrice(year, month, day, $scope.product);
          if (currentPrice) {
            var date = new Date(year, month, day);
            $scope.priceMap[date] = currentPrice;
          }
        }
      }
    }
  }

  $scope.setDayContent = function(date) {
    var price = $scope.priceMap[date];
    if (price) {
      if (price.adultCompanySalePrice) {
        return '<div class="price-container"><p class="cal-price">' + "销售价: ￥" + price.adultCompanySalePrice + "</p>" +
          '<p class="cal-price next">' + "同行价: ￥" + price.adultCompanyCompetitorPrice + "</p>" +
          '<p class="cal-price second">' + "余位: " + price.restPeopleNumber + "</p></div>";
      }
    }
    return "<p></p>";
  };
};
