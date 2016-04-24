export default ($rootScope, $http, $state, lcConfig, $window) => {
  'ngInject';
  
  var service = {};
  service.download = download;
  return service;

  function download(successCallback, failCallback) {
    $http.post('/api/itinerary/download', {result: "123"})
     .then(function success(response) {
       successCallback(response);
      }, function error(response) {
        failCallback(response);
      });
  }
};
