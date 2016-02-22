export default ($rootScope, $http, $state, lcConfig, $window, md5, Upload) => {
  'ngInject';
  
  var service = {};
  service.providers = [];
  service.addProvider = addProvider;

  return service;

  function addProvider(provider) {
    service.providers.push(provider);
  }
};
