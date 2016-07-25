export default ($log, $scope, $mdSidenav, $window, dispatcherConfig, $uibModal, lcConfig, itineraryFac, productFac, userFac, menuConfig) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  $scope.product = {};
  $scope.toggleLeft = buildToggler('provider-side-bar');
  $scope.pickedProviders = [];
  $scope.price = 0;
  $scope.addUrl = lcConfig.apiHost + "/api/product/add";
  // test
  $scope.isEditing = true;
  $scope.showItinerary = false;
  $scope.showNotice = false;
  $scope.itinerary = [];
  $scope.dispatchers = dispatcherConfig.data;
  $scope.responses = [];
  $scope.hotels = menuConfig.data["酒店标准"];
  $scope.transports = menuConfig.data["交通方式"];
  $scope.types = menuConfig.data["类型"];
  $scope.areas = menuConfig.data["大区"];
  $scope.ueconfig = {
    toolbars: [
      ['undo', 'redo', '|', 'bold', 'italic', 'underline',
        'fontborder', 'strikethrough', 'superscript', 'subscript',
        'removeformat', 'formatmatch', 'autotypeset', 'blockquote',
        'pasteplain', '|',
        'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
        'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
        'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
        'directionalityltr', 'directionalityrtl', 'indent', '|',
        'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify']
    ],
  };

  $scope.$watch("product.duration", function(newValue, oldValue) {
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
  })

  $scope.submitProduct = () => {
    $log.log($scope.product);
    productFac.uploadProduct($scope.product)
    .then(function(response) {
      $log.log("upload product success");
    }, function(error) {
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
  }

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
};
