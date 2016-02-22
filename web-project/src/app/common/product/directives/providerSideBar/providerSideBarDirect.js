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

    scope.openContact = function (index) {
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
        // TODO: maybe add some handler when modal returns.
      });
    };

    }
  };
};
