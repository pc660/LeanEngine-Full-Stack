export default ($rootScope, $mdDialog, authFac, $log,$sce,  $state, $scope, $uibModal, userFac, lcConfig, $window, productFac, orderFac, formConfig, providerFac, menuConfig, SweetAlert) => {
  'ngInject';
  $scope.changePass = false;
  $scope.level = authFac.getUserLevel();
  $scope.isProvider = (authFac.getUserLevel() === lcConfig.userLevel.PROVIDER);
  $scope.query = {};
  $scope.categoryList = menuConfig.data["线路分类"];
  $scope.editProfile = false;
  providerFac.getProvider({index: 0}).then(function(results) {
    $log.log(results);
    $scope.providerList = results.providers.map(function(provider) {
      return provider.companyname;
    });
    $scope.providerMap = {};
    results.providers.forEach(function(provider) {
      $scope.providerMap[provider.companyname] = provider.objectId;
    })
    $log.log($scope.providerList);
  })

  $scope.edit = () => {
    $scope.editProfile = true;
  };

  $scope.save = () => {
    userFac.update($scope.user).then(function(result) {
      $scope.editProfile = false;
      SweetAlert.swal("更新成功");
      return;
    });
  };

  if ($scope.$parent.unfinished) {
    $scope.unfinished = "(有未处理产品)";
  }

  $scope.fetchedProvider = false;
  $scope.contactList = [];

  userFac.getCurrentUserInfo().then(function(result) {
    $scope.user = result;
  }, function(error) {

  });

  $scope.$watch("showProvider", function(value) {
    if ($scope.provider) {
      $scope.$broadcast("addressUpdate", {address: $scope.provider.address});
    }
  })

  $scope.showUnverified = () => {
    $scope.unverified = true;
    $scope.query = {};
    $scope.query.myResponsible = true;
    $scope.query.status = lcConfig.productStatus.UNVERIFIED;
    $scope.search();
  };

  $scope.search = () => {
    $scope.isLoading = true;
    $scope.query.index = $scope.currentPage;
    if ($scope.provider) {
      $scope.query.provider = $scope.providerMap[$scope.provider];
    }

    if ($scope.productId) {
      $scope.query.productId = $scope.productId;
    }
    $log.log($scope.query);
    productFac.searchProduct($scope.query).then(function(results) {
      $log.log(results)
      $scope.isLoading = false;
      $scope.products = results.products;
      $scope.totalProducts = results.count;
      $scope.products.forEach(function(product, i) {
        product.responsible = results.responsible[i];
        product.provider = results.providers[i];
        productFac.getLatestTrip(product);
        product.updateCategory = false;
      })
    }, function(error) {
    });
  };


  $scope.showVerified = () => {
    $scope.unverified = true;
    $scope.query = {};
    $scope.query.myResponsible = true;
    $scope.query.status = lcConfig.productStatus.VERIFIED;
    $scope.search();
  };

  $scope.showMyProducts = (category) => {
    $scope.unverified = false;
    // Construct the query.
    $scope.query = {};
    $scope.query.status = lcConfig.productStatus.VERIFIED;
    $scope.query.self = true;
    if (category) {
      $scope.query.category = category;
    }
    $scope.search();
  };

  $scope.showMyVerifyProducts = () => {
    $scope.query = {};
    $scope.query.self = true;
    $scope.query.status = lcConfig.productStatus.UNVERIFIED;
    $scope.search();
  };

  $scope.showMyUnpostedProducts = () => {
    $scope.query = {};
    $scope.query.self = true;
    $scope.query.status = lcConfig.productStatus.UNPOSTED;
    $scope.search();
  };

  $scope.deleteContact = (index) => {
    var contact = $scope.contactList[index];
    $log.log(contact.objectId);
    userFac.deleteContactList(contact.objectId).then(function() {
      $scope.contactList.splice(index, 1);
    });
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
          for (var i in items) {
            var item = items[i];
            item.value = contact[item.name];
          }
          return {"title": title, "items": items };
        }
      }
    });
    modalInstance.result.then(function (items) {
      var contact = $scope.convertItemsToContact(items);
      contact.objectId = $scope.contactList[index].objectId;
      userFac.editContactList(contact).then(function() {
        $scope.contactList[index] = contact;
      });
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
    if (!$scope.provider) {
      SweetAlert.swal("对不起,你还没有供应商");
      return;
    }
    userFac.addContact($scope.contactList, $scope.provider.objectId);
  };

  // TODO: FUCK THIS BITCH CODE. REWRITE!!!!
  $scope.showMyProvider = () => {
    $scope.products = [];
    $scope.showProvider = true;
    $scope.showContactList = false;
    $log.log($scope.provider);
    $scope.currentProvider = $scope.provider;
    $scope.testing1 = angular.copy($scope.provider.destination);
    $log.log($scope.testing1);
    $scope.testing2 = angular.copy($scope.provider.start);
    $scope.provider.fileUrl = $sce.trustAsResourceUrl($scope.provider.licenseFile.url);
  };

  $scope.showMyContactList = () => {
    $scope.products = [];
    $scope.showProvider = false;
    $scope.showContactList = true;
  };

  $scope.unPost = (index) => {
    var product = $scope.products[index];
    productFac.unPost(product.objectId).then(function(value) {
      SweetAlert.swal("下架成功", "请刷新网页", "success");

    });
  };

  $scope.verify = (index) => {
    var product = $scope.products[index];
    productFac.verify(product.objectId).then(function(value) {
      SweetAlert.swal("审核成功", "请刷新网页", "success");
    });
  };

  $scope.post = (index) => {
    var product = $scope.products[index];
    productFac.post(product.objectId).then(function(value) {
      SweetAlert.swal("提交成功", "请刷新网页", "success");
    });
  };

  $scope.clone = (index) => {
    var product = $scope.products[index];
    productFac.clone(product.objectId).then(function(value) {
      SweetAlert.swal("提交成功", "请刷新后进行修改", "success");
    });
  }

  // TODO.
  $scope.remind = (index) => {

  };

  $scope.addMyProvider = () => {
    $log.log($scope.provider);
    $state.go("home.add-provider", {"provider": $scope.provider});
  };

  $scope.editProduct = (index) => {
    var product = $scope.products[index];
    $state.go("home.edit-product", {productId: product.objectId});
  };

  $scope.changePass = () => {
    authFac.changePass().then(function() {
      SweetAlert.swal("请到您的邮箱中接受重置密码的邮件");
    })
  };

  $scope.showRevokeOrder = () => {
    orderFac.getRevoke().then(function() {

    })
  };

  $scope.showMyOrder = () => {

  };

  $scope.deleteProduct = (index) => {
    var product = $scope.products[index];
    productFac.deleteProduct(product.objectId).then(function(value) {
      SweetAlert.swal("删除成功", "请刷新网页", "success");
    });
  };

  $scope.pageChanged = () => {
    $scope.products = [];
    $scope.search();
  };

  $scope.updateCategory = (product) => {
    var confirm = $mdDialog.confirm()
      .title("该更改可能会实时更改前台结果,请再次确认.")
      .ok("确认")
      .cancel("取消");
      $mdDialog.show(confirm).then(function() {
      productFac.updateCategory(product.objectId, product.category).then(function() {
        SweetAlert.swal("更新成功", "请通知前台核实", "success");
      });
    }, function() {
    });
  };

  $scope.updateIndex = (product) => {
    var confirm = $mdDialog.confirm()
      .title("该更改可能会实时更改前台结果,请再次确认.")
      .ok("确认")
      .cancel("取消");
    $mdDialog.show(confirm).then(function() {
      productFac.updateIndex(product.objectId, product.indexPage).then(function() {
        SweetAlert.swal("更新成功", "请通知前台核实", "success");
      });
    }, function() {
    });
  }
};
