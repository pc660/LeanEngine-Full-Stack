export default ($log, $rootScope, $mdSidenav, $state, $window, providerFac, $uibModal, productFac) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
    replace: true,
    link: function(scope, element, attr) {
      
      scope.$on("sidebarOpen", function() {
        scope.initializeSidebar();
      });
      /*
      * Initilize for search box.
      * */
      scope.doSearch = (searchString) => {
        var query = JSON.stringify(
          {"mainBusiness": searchString, "type": "contain"});
        providerFac.getProvider(query)
          .then(function(results) {
            scope.providers = results;
            scope.isMenu = false;
            scope.isSecondMenu = true;
          }, function(error) {
            // TODO: handle error.
          });
      };
      
      // Initalize.
      scope.initializeSidebar = () => {
        scope.isMenu = true;
        scope.isSeondMenu = false;
        scope.providers = [];
        scope.servingType = "";
      };
    
      /**
      * 搜索供应商根据关键词，关键词为供应商名词.
      * */
      scope.searchFromKeyword = (keyword) => {
        var query = JSON.stringify({"keyword": keyword});
        providerFac.getProvider(query)
          .then(function(results) {
            scope.providers = results;
            scope.isMenu = false;
            scope.isSecondMenu = true;
          }, function(error) {
            // TODO: handle error.
          });
      };

      scope.advanceSearch = () => {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/common/product/directives/providerSideBar/search/advanceProviderSearch.html',
          controller: 'providerSearchCtrl',
        });

        modalInstance.result.then(function (results) {
          scope.providers = results;
          scope.isMenu = false;
          scope.isSecondMenu = true; 
        }, function () {
        });
      };
    
      scope.getProviderList = (servingType) => {
        // TODO: finish the translation.
        var translate = {
          'motorcade': '车队',
          'domestieOperator': "地接社",
        };
        
        var query = {};
        query[servingType] = true;
        $log.log(query);
        providerFac.getProvider(query)
        .then(function(results) {
          scope.isMenu = false;
          scope.isSecondMenu = true;
          if (results.count > 0) {
            scope.providers = results.providers;
          }
        }, function(error) {
          // TODO: error.
        });
        scope.servingType = translate[servingType]; 
      };

      scope.pickProvider = (index) => {
        // Add provider to the providerFac.
        var provider = scope.providers[index];
        provider.servingType = scope.servingType;
        provider.returnPolicy = providerFac.util.getReturnPolicy(provider);
        $mdSidenav('provider-side-bar').close()
          .then(function() {
            //scope.$parent.providers = productFac.providers;
            scope.pickedProviders.push(provider);
            scope.initializeSidebar();
            scope.$broadcast("addProvider");
          });
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
