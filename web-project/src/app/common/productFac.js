export default ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, multiChoiceConfig) => {
  'ngInject';

  var service = {};
  service.providers = [];
  service.addProvider = addProvider;
  service.getAllProducts = getAllProducts;
  service.getProductDetail = getProductDetail;
  service.searchProduct = searchProduct;
  service.signinUser = signinUser;
  service.uploadProduct = uploadProduct;
  service.getInternalUsers = getInternalUsers;
  service.getUnVerifiedProducts = getUnVerifiedProducts;
  service.hasUnfinished = hasUnfinished;
  service.verify = verify;
  service.post = post;
  service.unPost = unPost;
  service.getProductsCount = getProductsCount;
  service.getLatestTrip = getLatestTrip;
  service.convertProductPrefix = convertProductPrefix;
  return service;

  function uploadProduct(product) {
    // Handle all the serilize things here.
    // Save an additional field to accerlate search speed.
    $log.log(product);
    return $http.post('/api/product/add', {product: product});
  }


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
  function getAllProducts(status) {
    // TODO: add status check.
    if (status !== undefined) {
      return $http.post('/api/product/getAll', {status: status});
    }
    return $http.post('/api/product/getAll');
  }

  function getProductDetail(objectId) {
    return $http.post('/api/product/get', {id: objectId});
  }

  // User a const value maybe.
  function getInternalUsers() {
    $log.log("get internal users");
    return $http.post('/api/user/get', {query: {level : 0}});
  }

  function getUnVerifiedProducts() {
    return $http.post('/api/product/getUnverified');
  }

  function hasUnfinished() {
    return $http.post('/api/product/hasUnfinished');
  }

  function verify(objectId) {
    return $http.post('/api/product/verify', {objectId: objectId, status: 3});
  }

  function unPost(objectId) {
    return $http.post('/api/product/verify', {objectId: objectId, status: 1});
  }

  function post(objectId) {
    return $http.post('/api/product/verify', {objectId: objectId, status: 2});
  }

  function getProductsCount() {
    return $http.post('/api/product/getProductsCount', {all: true});
  }

  // Get products related with the user.
  function getMyProducts(status) {
    // TODO: add status check.
    if (status !== undefined) {
      return $http.post('/api/product/getMy', {status: status});
    }
    return $http.post('/api/product/getMy');
  }

  function getLatestTrip(product) {
    $log.log("getLatestTrip");
    var price = product.price;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    for (var i = 0; i < Object.keys(price).length; i++) {
      var event = findNextInOneYear(price, year + i, month, day);
      if (event) {
        product.latestDate = event.date;
        product.latestAdultCompanySalePrice = event.event.adultCompanySalePrice;
        product.latestAdultCompanyCompetitorPrice = event.event.adultCompanyCompetitorPrice;
        product.latestAdultCompanyPrice = event.event.adultCompanyPrice;
        product.latestChildCompanySalePrice = event.event.childCompanySalePrice;
      } else {
        month = 0;
        day = 0;
      }
    }
  }

  function findNextInOneYear(price, startYear, startMonth, startDay) {
    var events = price[startYear];
    if (events === undefined) {
      return null;
    }
    for (var i = startMonth; i < 12; i++) {
      var monthEvents = events[i];
      for (var j = startDay; j <= monthEvents.length; j++) {
        var event = monthEvents[j - 1];
        if (!event || Object.keys(event).length == 0) {
          continue;
        }
        return {event: event, date: startYear + "年" + (startMonth + 1) + "月" + j + "日"};
      }
      startDay = 1;
    }
    return null;
  }

  function convertProductPrefix(prefixArray) {
    if (!prefixArray) {
      return [];
    }
    var prefixData = multiChoiceConfig.data["线路前缀"];
    return prefixArray.map(function(name) {
      for (var i = 0; i < prefixData.length; i++) {
        var prefix = prefixData[i];
        if (prefix.name === name) {
          return prefix.value;
        }
      }
    });
  };
};
