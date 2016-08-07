export default ($log, authFac, userFac, $rootScope, $mdSidenav, $state, $window, providerFac, $uibModal, productFac) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
    replace: true,
    link: function(scope, element, attr) {

      $log.log("123");
      scope.filterProviders = [];
      scope.$on("sidebarOpen", function() {
        // TODO: Maybe cache the value.
        $log.log(scope.providers);
        if (scope.providers) {
          scope.filterProviders = scope.providers;
        } else {
          scope.initializeSidebar();
        }
      });

      // Initalize.
      scope.initializeSidebar = () => {
        scope.providers = [];
        scope.getProviderList();
      };

      // TODO: Check how many providers we have. If too much, we need to do
      // index.
      scope.getProviderList = () => {
        var query = {};
        var level = authFac.getUserLevel();
        // ADMIN
        if (level == 0) {
          providerFac.getProvider(query)
            .then(function(results) {
              if (results.count > 0) {
                // Set the provider contact list.
                for (var i = 0; i < results.providers.length; i++) {
                  results.providers[i].contactList = results.contacts[i];
                }
                scope.filterProviders = scope.providers = results.providers;
                $log.log(scope.providers);
              }
            }, function(error) {
              // TODO: error.
            });
        } else {
          userFac.getProvider().then(function(result) {
            tool.l(result);
            scope.filterProviders = scope.providers = [result];
          });
        }
      };

      scope.pickProvider = (index) => {
        // Add provider to the providerFac.
        var provider = scope.providers[index];
        provider.returnPolicy = providerFac.util.getReturnPolicy(provider);
        $mdSidenav('provider-side-bar').close()
          .then(function() {
            scope.product.contact = {};
            scope.product.pickedProvider = provider;
          });
      };

      // Maybe use some query handling logic.
      scope.searchProvider = (query) => {
        scope.filterProviders = [];
        scope.providers.forEach(function(provider) {
          if (provider.nickname.toLowerCase().indexOf(query) >=0 ||
            provider.companyname.toLowerCase().indexOf(query) >=0) {
              scope.filterProviders.push(provider);
            }
        });
        return scope.filterProviders;
      };

      scope.selectProvider = (selected) => {
        scope.filterProviders = [selected.originalObject];
        $log.log(scope.filterProviders);
      };

      scope.openContact = (index) => {
        // TODO: add translate message here.
        var translate = {
          "contactname": "联系人姓名",
          "qqnumber": "QQ号码",
        };

        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/common/product/directives/providerSideBar/contact/myModalContent.html',
          controller: 'modalCtrl',
          resolve: {
            provider: function () {
              // Construct the contact.
              var contact = {};
              for (var key in translate) {
                contact[key] = scope.providers[index][key];
              }

              var contactInfo = [];
              Object.keys(contact).forEach(function(key) {
                if (key in translate) {
                  contactInfo.push({key: translate[key], value: contact[key]});
                }
              });
              return {id: scope.providers[index].id, contact: contactInfo};
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          scope.selected = selectedItem;
        }, function () {
        });
      };
    }
  };
};
