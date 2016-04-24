export default ($rootScope, $http, $state, lcConfig, $window) => {
  'ngInject';
  
  var service = {};
  service.search = search;
  return service;
  
  function search(query) {
    return $http.post('/api/customer/search', {query: query});
  }
};
