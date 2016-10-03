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
  service.setDayContent = setDayContent;
  service.getPrice = getPrice;
  service.setStorageContent = setStorageContent;
  service.parseDate = parseDate;
  service.deleteProduct = deleteProduct;
  service.getSelfPaidList = getSelfPaidList;
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
    return $http.post('/api/user/get', {query: {level : [0, 3]}});
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
    if (!product.stopDay) {
      product.stopDay = 0;
    }
    var price = product.price;
    var date = new Date();
    date.setDate(date.getDate() + product.stopDay);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    removeExpiredPrice(product);

    product.priceDate = [];
    for (var year in price) {
      for (var month = 0; month < 12; month++) {
        if (!price[year][month]) {
          continue;
        }
        for (var day = 1; day <= 31; day++) {
          var event = price[year][month][day];
          if (event && Object.keys(event).length > 1) {
            var dateString = year + "年" + (month + 1) + "月" + day + "日";
            product.priceDate.push(dateString);
            if (!product.latestAdultCompanySalePrice) {
              product.latestAdultCompanySalePrice = 99999999;
            }
            product.latestAdultCompanySalePrice = Math.min(product.latestAdultCompanySalePrice, event.adultCompanySalePrice);
          }
        }
      }
    }
    $log.log(product.priceDate);
    if (product.priceDate.length > 0) {
      return true;
    }
    return false;
  }

  function removeExpiredPrice(product) {
    var date = new Date();
    if (!product.stopDay) {
      product.stopDay = 0;
    }
    date.setDate(date.getDate() + product.stopDay);
    for (var year in product.price) {
      for (var month in product.price[year]) {
        for (var day in product.price[year][month]) {
          var newDate = new Date(year, month, day);
          if (newDate - date < 0) {
            delete product.price[year][month][day];
          }
        }
      }
    }
  }

  function findNextInOneYear(price, startYear, startMonth, startDay) {
    if (! (startYear in price)) {
      return null;
    }
    var events = price[startYear];
    for (var month = startMonth; month < 12; month++) {
      if (!(month in events)) {
        startDay = 1;
        continue;
      }
      var monthEvents = events[month];
      for (var day = startDay; day <= 31; day++) {
        if (!(day in monthEvents)) {
          continue;
        }
        var event = monthEvents[day];
        if (!event || Object.keys(event).length === 0) {
          continue;
        }
        return {event: event, date: startYear + "年" + (month + 1) + "月" + day + "日"};
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
  }

  function setDayContent(date, product) {
    if (!product.price) {
      return "<div></div>";
    }
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var price = getPrice(year, month, day, product);
    if (price && Object.keys(price).length > 3) {
      var content = {};
      content["同行"] = "¥" + price.adultCompanyCompetitorPrice || "";
      content["销售"] = "¥" + price.adultCompanySalePrice || "";
      content["结算"] = "¥" + price.adultCompanyPrice || "";
      content["库存"] = price.totalPeople;
      // Construct the content.
      var htmlString = "";
      for (var key in content) {
        htmlString = htmlString + '<div>' + key + ": " + content[key] + '</div>';
      }
      return htmlString;
    }
    return "<div></div>";
  }

  function getPrice(year, month, day, product) {
    var price = product.price || {};
    price = price[year] || {};
    price = price[month] || {};
    price = price[day] || {};
    return price;
  }

  function setStorageContent(date, product) {
    if (!product.price) {
      return "<div></div>";
    }

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var price = getPrice(year, month, day, product);
    if (price && Object.keys(price).length > 3) {
      var content = {};
      content["最小成团人数"] = "¥" + price.minimumPeople || "";
      content["占位数"] = "¥" + price.reservedPeopleNumber || "";
      content["签约数"] = "¥" + price.paidPeopleNumber || "";
      content["余位"] = price.restPeopleNumber || "";
      // Construct the content.
      var htmlString = "";
      for (var key in content) {
        htmlString = htmlString + '<div>' + key + ": " + content[key] + '</div>';
      }
      return htmlString;
    }
    return "<div></div>";
  }

  function parseDate(dateString) {
    var re = /([0-9]+)年([0-9]+)月([0-9]+)日/;
    var match = dateString.match(re);
    if (match.length == 4) {
      return new Date(match[1], match[2] - 1, match[3]);
    }

    return null;
  }

  function deleteProduct (productId) {
    return $http.post('/api/product/delete', {productId: productId});
  }

  function getSelfPaidList () {
    return $http.post('/api/product/getSelfPaid');
  }
};
