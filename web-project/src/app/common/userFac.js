export default ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig) => {
  'ngInject';
  var service = {};
  service.getCurrentUserInfo = getCurrentUserInfo;
  service.addContactList = addContactList;
  service.editContactList = editContactList;
  service.deleteContactList = deleteContactList;
  service.addContact = addContact;
  service.getProvider = getProvider;
  service.showContact = showContact;
  service.getSaleusers = getSaleusers;
  service.update = update;
  service.getEmployeeList = getEmployeeList;
  return service;

  function getCurrentUserInfo() {
    return $http.post('/api/user/getCurrentUserInfo');
  }

  function addContactList(contact) {
    return $http.post('/api/user/addContactList', {contact: contact});
  }

  function deleteContactList(contactId) {
    return $http.post('/api/user/deleteContactList', {contactId: contactId});
  }

  function editContactList(contact) {
    return $http.post('/api/user/editContactList', {contact: contact});
  }

  function update (user) {
    return $http.post('/api/user/update', {user: user});
  }

  function addContact(contactList, providerId) {
    var items = angular.copy(formConfig.data["商户联系人"])
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/directives/form/form.html',
      controller: 'formCtrl',
      resolve: {
        // Need to convert the titles into the following format.
        // {key: name, type: type}
        data: function () {
          var title = "添加商户人信息";
          return {"title": title, "items": items, "editable": true};
        }
      }
    });

    modalInstance.result.then(function (items) {
      var contact = convertItemsToContact(items, providerId);
      if (providerId) {
        addContactList(contact).then(function(result) {
          contactList.push(result);
        });
      }
    }, function () {
    });
  }

  function showContact(order) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/directives/form/form.html',
      controller: 'formCtrl',
      resolve: {
        // Need to convert the titles into the following format.
        // {key: name, type: type}
        data: function () {
          var title = "联系信息";
          var items = [
            {
              "key": "姓名",
              "value": order.contactname
            },
            {
              "key": "手机",
              "value": order.cellphone
            },
            {
              "key": "邮箱",
              "value": order.email
            },
            ];
          return {"title": title, "items": items, "editable": false};
        }
      }
    });
  }

  function convertItemsToContact(items, providerId) {
    var contact = {};
    items.forEach(function(item) {
      contact[item.name] = item.value;
    });
    if (providerId) {
      contact.providerId = providerId;
    }
    return contact;
  }

  function getProvider() {
    return $http.post('/api/user/getProvider');
  }

  // User a const value maybe.
  function getSaleusers() {
    return $http.post('/api/user/get', {query: {level : [lcConfig.userLevel.SALE]}});
  }

  // Include: ["provider", "product", "order"].
  function getEmployeeList(include, options) {
    var query = {level : [lcConfig.userLevel.ORGANIZER]};
    options = options || {};
    if (options.startDate) {
      query.startDate = options.startDate;
    }
    if (options.endDate) {
      query.endDate = options.endDate;
    }
    return $http.post('/api/user/get', {include: include, query: query});
  }
};
