export default ($sce, $scope, $state, $log, $mdSidenav, $window, $uibModal, $activityIndicator, lcConfig, itineraryFac, productFac, menuConfig, providerFac) => {
  'ngInject';

  $scope.selectedTags = {};

  $scope.index = {
    "出发城市": -1,
    "酒店标准": -1,
    "交通方式": -1,
    "类型": -1,
    "供应商": -1,
    "行程天数": -1,
    "大区": -1,
  };

  $scope.tags = {
    "出发城市": menuConfig.data["出发城市"],
    "酒店标准": menuConfig.data["酒店标准"],
    "交通方式": menuConfig.data["交通方式"],
    "类型": menuConfig.data["类型"],
    "大区": menuConfig.data["大区"],
    "供应商": [],
    "行程天数": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  $scope.showItinerary = (id) => {
    $state.go('sale.show-itinerary', {productId: id});
  };

  // Parse the search query.
  $scope.parseDayQuery = (query, day) => {
    var length = $scope.tags["行程天数"].length;
    if (day === $scope.tags["行程天数"][length - 1]) {
      query.minDay = day;
      query.maxDay = Number.MAX_SAFE_INTEGER;
    } else {
      query.minDay = day;
      query.maxDay = day;
    }
  };

  $scope.search = () => {
    // Construct the query based on selected tag.
    $scope.products = [];
    var query = {};
    for (var key in $scope.selectedTags) {
      var value = $scope.selectedTags[key];
      var name = getKeyName(key);
      if (name === "stopDay") {
        $scope.parseDayQuery(query, value);
      } else if (name === "provider") {
        query[name] = $scope.providers[$scope.index[key]].objectId;
      } else {
        query[name] = value;
      }
    }

    if ($scope.currentPage) {
      query.index = $scope.currentPage;
    }
    query.status = 3;
    query.searchQuery = $scope.destination;

    if ($scope.showAddress && $scope.start) {
      query.start = $scope.start;
    }

    if ($scope.showDate && $scope.startDate) {
      query.startDate = $scope.startDate;
    }

    if ($scope.showDate && $scope.endDate) {
      query.endDate = $scope.endDate;
    }

    $log.log(query);
    // Set start date.
    if (!query.startDate) {
      var date = new Date();
      query.startDate = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + (date.getDate()) + "日";
    }

    $activityIndicator.startAnimating();
    productFac.searchProduct(query).then(function(results) {
      $log.log("success");
      $activityIndicator.stopAnimating();
      $scope.totalProducts = results.count;
      $scope.products = results.products;
      $scope.products = $scope.products.filter(function(product) {
        product.prefixArray = productFac.convertProductPrefix(product.prefix);
        if (product.itineraryFile) {
          product.fileUrl = $sce.trustAsResourceUrl(product.itineraryFile.url);
        }
        return productFac.getLatestTrip(product);
      });
      for (var i = 0; i < $scope.products.length; i++) {
        $scope.products[i].provider = results.providers[i];
      }
    });
  };

  providerFac.search({}, ["companyname"]).then(function(providers) {
    $scope.providers = providers;
    $scope.tags['供应商'] = providers.map(function(provider) {
      return provider.companyname;
    });
  });

  $scope.search();
  $scope.pick = (key, index) => {
    $scope.index[key] = index;
    if (index === -1) {
      delete $scope.selectedTags[key];
    } else {
      $scope.selectedTags[key] = $scope.tags[key][index];
    }
  };

  $scope.removeTag = (key) => {
    // Need to update index.
    delete $scope.selectedTags[key];
    $scope.index[key] = -1;
  };

  $scope.pageChanged = () => {
    $scope.search();
  };

  function getKeyName(key) {
    switch (key) {
      case "酒店标准":
        return "hotelStandard";
      case "交通方式":
        return "transportStandard";
      case "类型":
        return "type";
      case "行程天数":
        return "stopDay";
      case "供应商":
        return "provider";
      case "大区":
        return "area";
      case "出发城市":
        return "start";
      default:
        return "";
    }
  }
};

