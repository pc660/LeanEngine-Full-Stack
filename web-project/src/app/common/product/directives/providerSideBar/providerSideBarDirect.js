export default ($rootScope, $state, $window, providerFac, $uibModal) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
    replace: true,
    link: function(scope, element, attr) {
      // Initalize.
     scope.isMenu = true;
     scope.getProviderList = (servingType) => {
      providerFac.getProviderFromType(servingType, scope.success, scope.fail);
     };
     scope.success = (response) => {
      scope.providers = response;
      scope.isMenu = false;
      scope.isSecondMenu = true;
      for (var index in scope.providers) {
        scope.providers[index].isCollapsed = true;
      }
     };
     scope.fail = (response) => {
      $window.alert('fail');
     };

      scope.items = ['item1', 'item2', 'item3'];
      scope.openContact = function (index) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/common/product/directives/providerSideBar/contact/myModalContent.html',
          controller: 'modalCtrl',
          resolve: {
            items: function () {
              return scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          scope.selected = selectedItem;
        }, function () {
          $window.alert('Modal dismissed at: ' + new Date());
        });
      };

    }
  };
};
