export default ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig) => {
  'ngInject';
  var service = {};
  service.getCurrentUserInfo = getCurrentUserInfo;
  service.addContactList = addContactList;
  service.editContactList = editContactList;
  service.deleteContactList = deleteContactList;
  service.addContact = addContact;
  service.getProvider = getProvider;
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

  function addContact(contactList, providerId) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/common/directives/form/form.html',
      controller: 'formCtrl',
      resolve: {
        // Need to convert the titles into the following format.
        // {key: name, type: type}
        data: function () {
          var title = "添加商户人信息";
          return {"title": title, "items": formConfig.data["商户联系人"]};
        }
      }
    });

    modalInstance.result.then(function (items) {
      var contact = convertItemsToContact(items, providerId);
      addContactList(contact).then(function() {
        contactList.push(contact);
      })
    }, function () {
    });
  };

  function convertItemsToContact(items, providerId) {
    var contact = {};
    items.forEach(function(item) {
      contact[item.name] = item.value;
    });
    contact.providerId = providerId;
    return contact;
  };

  function getProvider() {
    return $http.post('/api/user/getProvider');
  };
};
