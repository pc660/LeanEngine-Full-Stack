export default ($scope, $state, $log, $mdSidenav, $window, $uibModal, lcConfig, itineraryFac, productFac) => {
  'ngInject';

  $scope.openSearchBox = () => {
    // Show all cities.
  };

  $scope.showItinerary = (id) => {
    $state.go('sale.show-itinerary', {productId: id});
  };

  $scope.openFilter = () => {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/sale/search/directives/filter/filter.html',
      controller: 'filterCtrl',
    });

    modalInstance.result.then(function (results) {
      $scope.products = results;
    }, function() {
    
    });
  };

  $scope.signin = (index) => {
    var product = $scope.products[index];
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/sale/search/directives/signin/signin.html',
      controller: 'signinCtrl',
      resolve: {
        product: function() {
          return product;
        }
      }
    });

    modalInstance.result.then(function (results) {
    }, function() {
    });
  };
};

