export default ($log, authFac, userFac, $rootScope, $mdSidenav, $state, $window, providerFac, $uibModal, productFac) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
    replace: true,
    link: function(scope, element, attr) {
      // TODO: Check how many providers we have. If too much, we need to do
      // index.
      scope.getProviderList = () => {
        var query = {};
        var level = authFac.getUserLevel();
        // ADMIN or 计调员.
        if (level === 0 || level == 3) {
          providerFac.getProvider(query)
            .then(function(results) {
              $log.log(results);
              for (var i = 0; i < results.providers.length; i++) {
                results.providers[i].contactList = results.contacts[i];
              }
              scope.filterProviders = scope.providers = results.providers;
              $log.log(scope.providers);
            }, function(error) {
              // TODO: error.
            });
        } else {
          userFac.getProvider().then(function(result) {
            $log.log(result);
            result.provider.contactList = result.contacts;
            scope.filterProviders = scope.providers = [result.provider];
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
        $log.log(query);
        if (!query) {
          $log.log("here");
          scope.filterProviders = scope.providers;
          return;
        }
        scope.filterProviders = [];
        scope.providers.forEach(function(provider) {
          $log.log(provider);
          provider.nickname = provider.nickname || "";
          provider.companyname = provider.companyname || "";
          if (provider.nickname.toLowerCase().indexOf(query) >=0 ||
            provider.companyname.toLowerCase().indexOf(query) >=0) {
              scope.filterProviders.push(provider);
            }
        });
        return scope.filterProviders;
      };

      scope.selectProvider = (selected) => {
        $log.log(selected);
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
      scope.filterProviders = [];
      scope.providers = [];
      scope.getProviderList();
    }
  };
};
