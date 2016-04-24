export default ($scope, $mdSidenav, $window, $uibModal, lcConfig, itineraryFac, productFac) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  $scope.toggleLeft = buildToggler('provider-side-bar');
  $scope.pickedProviders = [];
  $scope.price = 0;
  $scope.addUrl = lcConfig.apiHost + "/api/product/add";
  // test
  $scope.isEditing = true;
  $scope.itinerary = [];
  function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
          });
      };
  }
  $scope.updatePrice = () => {
    $scope.price = 0;
    for (var i = 0; i < $scope.pickedProviders.length; i++) {
      $scope.price = parseInt($scope.price) + parseInt($scope.pickedProviders[i].price);
    }
  };

  $scope.submitProduct = () => {
    $scope.providerList = JSON.stringify($scope.pickedProviders);
    // stringify itineraray
    $scope.itineraryList = JSON.stringify($scope.itinerary);
  };

  $scope.addItinerary = () => {
    var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/common/product/directives/itinerary/add.html',
          controller: 'addItineraryCtrl',
          resolve: {
            results: function () {
              return {};
            }
          }
        });
        modalInstance.result.then(function (results) {
          $scope.itinerary.push(results);          
        }, function () {
        });
  };

  $scope.editItinerary = (index) => {
    // Show the model with the result.
    var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/common/product/directives/itinerary/add.html',
          controller: 'addItineraryCtrl',
          resolve: {
            results: function () {
              return $scope.itinerary[index];
            }
          }
        });
        modalInstance.result.then(function (results) {
          $scope.itinerary[index] = results;          
        }, function () {
     });
  };

  function success() {
  
  }
  
  function fail() {
  }

  $scope.test = () => {
    itineraryFac.download(success, fail);      
  };
};
