export default ($log, SweetAlert, $state, $scope, $stateParams, commonSer, providerFac, $mdSidenav, $window, dispatcherConfig, $uibModal, lcConfig, itineraryFac, productFac, userFac, menuConfig, calendarConfig) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  // Too hacky.
  $scope.firstUpdates = false;
  $scope.product = {};
  $scope.product.price = {};
  $scope.toggleLeft = buildToggler('provider-side-bar');
  $scope.pickedProviders = [];
  $scope.price = 0;
  $scope.addUrl = lcConfig.apiHost + "/api/product/add";
  // test
  $scope.isEditing = true;
  $scope.isExisting = false;
  $scope.showItinerary = false;
  $scope.showNotice = false;
  $scope.itinerary = [];
  $scope.dispatchers = dispatcherConfig.data;
  $scope.responses = [];
  $scope.hotels = menuConfig.data["酒店标准"];
  $scope.transports = menuConfig.data["交通方式"];
  $scope.types = menuConfig.data["类型"];
  $scope.areas = menuConfig.data["大区"];
  $scope.priceItems = calendarConfig.data["团期报价"];
  $scope.cachedPrice = {};

  if ($stateParams.productId) {
    // Update product.
    $scope.isExisting = true;
    productFac.getProductDetail($stateParams.productId).then(function(result) {
      $scope.firstUpdates = true;
      $scope.product = result.product;
      $scope.product.duration = $scope.product.itinerary.length;
      $scope.product.responsible = result.responsible;
      $scope.product.platformcontact = result.platformcontact;
      $scope.product.pickedProvider = result.provider;
      $scope.product.contact = result.contact;
      $log.log(result);
      providerFac.getContactList($scope.product.pickedProvider.objectId).then(function(contactList) {
        $scope.product.pickedProvider.contactList = contactList;
      });

      $scope.$broadcast("updateMaterialCalendar");
    });
  }

  $scope.$watch("product.duration", function(newValue, oldValue) {
    if ( $scope.firstUpdates) {
      $scope.firstUpdates = false;
      return;
    }
    $log.log(newValue);
    if (!$scope.product.itinerary) {
      $scope.product.itinerary = [];
    }
    if (newValue > oldValue) {
      $scope.product.itinerary.push({});
    } else if (newValue < oldValue){
      $scope.product.itinerary.pop();
    }
    $log.log($scope.product.itinerary);
  });

  $scope.checkProductPrice = () => {
    var price = $scope.product.price;
    for (var year in price) {
      for (var month in price[year]) {
        for (var day in price[year][month]) {
          if (Object.keys(price[year][month][day]).length > 3) {
            return true;
          }
        }
      }
    }
    return false;
  };

  $scope.submitProduct = () => {
    $log.log($scope.product);
    return;
    // Check if price exists.
    if (!$scope.checkProductPrice()) {
      SweetAlert.swal("发布失败", "至少输入一个团期", "error");
      return;
    }
    productFac.uploadProduct($scope.product)
    .then(function(result) {
        $log.log("upload product success");
        SweetAlert.swal({
            title: "发布成功",
            text: "请到我的账号中我发布的产品去查看更新.",
            type: "success",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确认",
            closeOnConfirm: true},
          function(){
            $state.go('home');
          });
    }, function(error) {
        SweetAlert.swal("发布失败", " 请重新登陆.", "error ");
    });
  };

  function buildToggler(navID) {
      return function() {
        $log.log("open sidebar");
        $scope.$broadcast("sidebarOpen");
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $scope.providers = [];
          });
      };
  }

  $scope.selectDispatcher = (value) => {
    if (value === undefined) {
      delete $scope.product.dispatcherName;
      delete $scope.product.dispatcherPhone;
    } else {
      $log.log($scope.product);
      var dispatch = value.originalObject;
      $log.log(dispatch);
      $scope.product.dispatcherName = dispatch.name;
      $scope.product.dispatcherPhone = dispatch.phone;
    }
  };

  $scope.addContact = () => {
    userFac.addContact($scope.product.pickedProvider.contactList, $scope.product.pickedProvider.objectId);
  };

  productFac.getInternalUsers().then(function(result) {
    $scope.responses = [];
    $log.log(result);
    for (var i = 0; i < result.length; i++) {
      $scope.responses.push(result[i]);
    }
  }, function(error) {

  });

  $scope.pickContact = (index) => {
    $log.log($scope.product);
    //$scope.contact = $scope.pickedProvider.contactList[i];
  };

  $scope.dayClick = (date) => {
    $log.log(date);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    $scope.currentPrice = productFac.getPrice(year, month, day, $scope.product);
    if (Object.keys($scope.currentPrice).length == 0) {
      $scope.currentPrice = angular.copy($scope.cachedPrice);
    }
    $scope.currentPrice.year = year;
    $scope.currentPrice.month = month;
    $scope.currentPrice.day = day;
  };

  $scope.setDayContent = (date) => {
    $log.log("setDayContent");
    return productFac.setDayContent(date, $scope.product);
  };

  $scope.setPrice = () => {
    var year = $scope.currentPrice.year;
    var month = $scope.currentPrice.month;
    var day = $scope.currentPrice.day;
    if ($scope.currentPrice && Object.keys($scope.currentPrice).length > 0) {
      commonSer.addProps($scope.product.price, [year, month, day], $scope.currentPrice);
    }
    $log.log($scope.product.price);
    $scope.cachedPrice = angular.copy($scope.currentPrice);
    delete $scope.cachedPrice.year;
    delete $scope.cachedPrice.month;
    delete $scope.cachedPrice.day;
  };

  $scope.$on("setCurrentPrice", function() {
    // Set day content.
    if ($scope.currentPrice) {
      $scope.setPrice();
      $scope.$broadcast("updateMaterialCalendar");
    }
  }, true);
};
