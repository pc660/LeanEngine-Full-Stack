export default ($rootScope, $mdSidenav, $state, $window, providerFac, $uibModal, productFac) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
    replace: true,
    link: function(scope, element, attr) {
      // Initalize.
      scope.initializeSidebar = () => {
        scope.isMenu = true;
        scope.isSeondMenu = false;
        scope.providers = [];
        scope.servingType = "";
      };
     
      scope.initializeSidebar(); 
     
      scope.getProviderList = (servingType) => {
        // TODO: finish the translation.
        var translate = {
          'motorcade': '车队',
        }
        
        providerFac.getProviderFromType(servingType, scope.success, scope.fail);
        scope.servingType = translate[servingType]; 
      };
     
      scope.success = (response) => {
        scope.providers = response;
        scope.isMenu = false;
        scope.isSecondMenu = true;
      };
     
      scope.fail = (response) => {
        $window.alert('fail');
      };

      scope.pickProvider = (index) => {
        // Add provider to the providerFac.
        var provider = scope.providers[index];
        provider.servingType = scope.servingType;
        $mdSidenav('provider-side-bar').close()
          .then(function() {
            //scope.$parent.providers = productFac.providers;
            scope.pickedProviders.push(provider);
            scope.initializeSidebar();
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
              var contact = scope.providers[index].contact;
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
          // 初始化navbar
          scope.initialize();
        });
      };
    }
  };
};
