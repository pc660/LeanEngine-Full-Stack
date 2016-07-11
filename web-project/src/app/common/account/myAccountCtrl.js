export default ($log, $state, $scope, $uibModal, userFac, lcConfig, $window, productFac, formConfig, providerFac) => {
  'ngInject';
  $log.log('init my account');
  if ($scope.$parent.unfinished) {
    $scope.unfinished = "(有未处理产品)";
  }

  $scope.contactList = [];

  userFac.getCurrentUserInfo().then(function(result) {
    $scope.user = result;
  }, function(error) {

  });

  providerFac.getMyProvider().then(function(results) {
    // There should be only one provider.
    if (results.length == 1) {
      $scope.provider = results[0];
      $scope.$broadcast("addressUpdate", {address: $scope.provider.address});
      providerFac.getContactList($scope.provider.objectId).then(function(results) {
        $scope.contactList = results;
      });
    }
  }, function (error) {
  });

  $scope.verify = (index) => {
    var product = $scope.products[index];
    productFac.verify(product.objectId).then(function(result) {
    }, function(error) {
    });
  };

  $scope.showUnverified = () => {
    $scope.unverified = true;
    var query = {};
    query.myResponsible = true;
    query.status = lcConfig.productStatus.UNVERIFIED;
    productFac.searchProduct(query).then(function(results) {
      $scope.products = results.products;
      for (var i = 0; i < $scope.products.length; i++) {
        $scope.products[i].responsible = results.responsible[i];
      }
    }, function(error) {
    });
  };

  $scope.showMyProducts = () => {
    $scope.unverified = false;
    // Construct the query.
    var query = {};
    query.self = true;
    productFac.searchProduct(query).then(function(results) {
      $scope.products = results.products;
      for (var i = 0; i < $scope.products.length; i++) {
        $scope.products[i].responsible = results.responsible[i];
      }
      $scope.products.forEach(function(product) {
        productFac.getLatestTrip(product);
      });
    }, function(error) {

    });
  };

  $scope.deleteContact = (index) => {
    var contact = $scope.contactList[index];
    $log.log(contact.objectId);
    userFac.deleteContactList(contact.objectId).then(function() {
      $scope.contactList.splice(index, 1);
    })
  };

  $scope.editContact = (index) => {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/directives/form/form.html',
      controller: 'formCtrl',
      resolve: {
        // Need to convert the titles into the following format.
        // {key: name, type: type}
        data: function () {
          var title = "添加商户人信息";
          var contact = $scope.contactList[index];
          var items = formConfig.data["商户联系人"];
          // Add values to items.
          for (i in items) {
            var item = items[i];
            item.value = contact[item.name];
          }
          return {"title": title, "items": items};
        }
      }
    });
    modalInstance.result.then(function (items) {
      var contact = $scope.convertItemsToContact(items);
      contact.objectId = $scope.contactList[index].objectId;
      userFac.editContactList(contact).then(function() {
        $scope.contactList[index] = contact;
      })
    }, function () {
    });
  };

  $scope.convertItemsToContact = (items) => {
    var contact = {};
    items.forEach(function(item) {
      contact[item.name] = item.value;
    });
    contact.providerId = $scope.provider.objectId;
    return contact;
  };

  $scope.addContact = () => {
    userFac.addContact($scope.contactList, $scope.provider.objectId);
  };

  $scope.showMyProvider = () => {
    $scope.products = [];
    $scope.showProvider = true;
    $scope.showContactList = false;
  };

  $scope.showMyContactList = () => {
    $scope.products = [];
    $scope.showProvider = false;
    $scope.showContactList = true;
  };

  $scope.unPost = (index) => {
    var product = $scope.products[index];
    productFac.unPost(product.objectId).then(function(value) {

    });
  };

  $scope.verify = (index) => {
    var product = $scope.products[index];
    productFac.verify(product.objectId).then(function(value) {
    });
  };

  $scope.post = (index) => {
    var product = $scope.products[index];
    productFac.post(product.objectId).then(function(value) {

    });
  };

  // TODO.
  $scope.remind = (index) => {

  };
};
