export default ($rootScope, $http, $state, lcConfig, $window, md5, Upload) => {
  'ngInject';
  
  var service = {};
  

  service.getProviderFromType = getProviderFromType;

  return service;

  function getProviderFromType(type, successCallback, failCallback) {
    var query = JSON.stringify({type: true});
    $http.post('/api/provider/get', {query: query})
   .then(function success(response) {
     successCallback(response);
    }, function error(response) {
      failCallback(response);
    });


  }

};
