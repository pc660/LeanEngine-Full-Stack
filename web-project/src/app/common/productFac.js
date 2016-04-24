export default ($rootScope, $http, $state, lcConfig, $window, md5, Upload) => {
  'ngInject';
  
  var service = {};
  service.providers = [];
  service.addProvider = addProvider;
  service.getAllProducts = getAllProducts;
  service.getProductDetail = getProductDetail;
  service.searchProduct = searchProduct;
  service.signinUser = signinUser;
  return service;

  function addProvider(provider) {
    service.providers.push(provider);
  }

  function searchProduct(parameters) {
    return $http.post('/api/product/search', {query: parameters});
  }

  function signinUser(parameters) {
    return $http.post('/api/product/signin', {query: parameters});
  }

  // TODO: add functionalities like partial sets.
  function getAllProducts(successCallback, failCallback) {
    $http.get('/api/product/getAll')
     .then(function success(response) {
        successCallback(response);
      }, function error(response) {
        failCallback(response);
      });
  }

  function getProductDetail(objectId) {
    return $http.post('/api/product/get', {id: objectId});
  }
};
