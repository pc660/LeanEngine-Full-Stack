export default ($sce, $scope, $state, $log, $mdSidenav, $window, multiChoiceConfig, $uibModal, $activityIndicator, lcConfig, itineraryFac, productFac, menuConfig, providerFac) => {
  'ngInject';

  $scope.indexPage = true;
  $scope.items = ["邮轮", "出境游", "国内游", "周边游"];

  $scope.select = (item) => {
    $scope.indexPage = false;
    $scope.key = item;
    $scope.selectedTags = {};
    $scope.selectedTags["大区"] = $scope.key;
    $scope.search(true);
  }
  $scope.selectedTags = {};

  $scope.index = {
    "出发城市": -1,
    "酒店标准": -1,
    "交通方式": -1,
    "类型": -1,
    "供应商": -1,
    "行程天数": -1,
    "大区": -1,
    "分区": -1,
  };

  $scope.tags = {
    "出发城市": menuConfig.data["出发城市"],
    "酒店标准": menuConfig.data["酒店标准"],
    "交通方式": menuConfig.data["交通方式"],
    "类型": menuConfig.data["类型"],
    "大区": menuConfig.data["大区"],
    "分区": [],
    "供应商": [],
    "行程天数": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "邮轮公司": menuConfig.data["邮轮公司"],
    "邮轮航线": menuConfig.data["邮轮航线"],
    "邮轮名称": menuConfig.data["邮轮名称"],
  };

  // Initilze parameters
  $scope.options = {};
  $scope.options["邮轮"] = [
    {title: "出发城市", data: $scope.tags["出发城市"]},
    {title: "行程天数", data: $scope.tags["行程天数"]},
    {title: "邮轮公司", data: $scope.tags["邮轮公司"]},
    {title: "邮轮航线", data: $scope.tags["邮轮航线"]},
    {title: "邮轮名称", data: $scope.tags["邮轮名称"]},
  ];

  $scope.options["出境游"] = [
    {title: "出发城市", data: $scope.tags["出发城市"]},
    {title: "行程天数", data: $scope.tags["行程天数"]},
    {title: "类型", data: $scope.tags["类型"]},
    {title: "分区", data: menuConfig.data["出境游"]},
  ];

  $scope.options["国内游"] = [
    {title: "出发城市", data: $scope.tags["出发城市"]},
    {title: "行程天数", data: $scope.tags["行程天数"]},
    {title: "分区", data: menuConfig.data["国内游"]},
  ];

  $scope.options["周边游"] = [
    {title: "出发城市", data: $scope.tags["出发城市"]},
    {title: "行程天数", data: $scope.tags["行程天数"]},
    {title: "分区", data: menuConfig.data["周边游"]},
  ];

  function popDetails(option) {
    if (option[option.length - 1].title == "小区") {
      option.pop();
    }
    return;
  }

  function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
  }

  $scope.$watch("selectedTags", function(value) {
    // Remove all '不限' in selectedTags.
    for (var key in $scope.selectedTags) {
      if ($scope.selectedTags[key] == '不限') {
        delete $scope.selectedTags[key];
      }
      if (key == "分区") {
        var option = $scope.options[$scope.key];
        var value = $scope.selectedTags[key];
        if (!multiChoiceConfig.data[value]) {
          popDetails(option);
          return;
        }

        var details = multiChoiceConfig.data[value].map(function(result) {
          return result.value;
        });

        var option = $scope.options[$scope.key];
        if (option[option.length - 1].title == "小区") {
          if (!arraysEqual(details, option[option.length - 1].data)) {
            popDetails(option);
            option.push({title: "小区", data: details});
          }
        } else {
          option.push({title: "小区", data: details});
        }
      }
    }
    $scope.index = 0;
    $scope.currentPage = 0;
    $scope.search(true /* query change */);
  }, true);

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

  function filterProducts(products) {
    return products.filter(function(product) {
      product.prefixArray = productFac.convertProductPrefix(product.prefix);
      if (product.itineraryFile) {
        product.fileUrl = $sce.trustAsResourceUrl(product.itineraryFile.url);
      }
      return productFac.getLatestTrip(product);
    });
  }

  $scope.search = (queryChanged) => {
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

    $log.log($scope.currentPage);
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

    // Set start date.
    if (!query.startDate) {
      var date = new Date();
      query.startDate = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + (date.getDate()) + "日";
    }

    $activityIndicator.startAnimating();
    $log.log(query);
    query.category = "普通";
    productFac.searchProduct(query).then(function(results) {
      $activityIndicator.stopAnimating();
      $scope.totalProducts = results.count;
      for (var i = 0; i < results.products.length; i++) {
        results.products[i].provider = results.providers[i];
      }
      $scope.products = filterProducts(results.products);
    });
    var saleQuery = angular.copy(query);
    saleQuery.category = "促销";
    saleQuery.index = 0;
    if (queryChanged) {
      $scope.saleProducts = [];
      productFac.searchProduct(saleQuery).then(function(saleResults) {
        if (saleResults.products.length > 5) {
          saleResults.products = saleResults.products.slice(0, 5);
        }
        for (var i = 0; i < saleResults.products.length; i++) {
          saleResults.products[i].provider = saleResults.providers[i];
        }
        $scope.saleProducts = filterProducts(saleResults.products);
      });
    }
  };

  providerFac.search({}, ["companyname"]).then(function(providers) {
    $scope.providers = providers;
    $scope.tags['供应商'] = providers.map(function(provider) {
      return provider.companyname;
    });
  });

  $scope.pick = (key, index) => {
    $scope.index[key] = index;
    if (index === -1) {
      delete $scope.selectedTags[key];
    } else {
      $scope.selectedTags[key] = $scope.tags[key][index];
    }
    if (key == "大区") {
      $scope.tags["分区"] = menuConfig.data[$scope.selectedTags[key]];
    }
  };

  $scope.removeTag = (key) => {
    // Need to update index.
    delete $scope.selectedTags[key];
    $scope.index[key] = -1;
  };

  $scope.pageChanged = () => {
    $log.log($scope.currentPage);
    $scope.search(false /* query change */);
  };

  // Get index page
  var query = {indexPage: true, status: 3};
  $activityIndicator.startAnimating();
  productFac.searchProduct(query).then(function(results) {
    $activityIndicator.stopAnimating();
    var indexProducts = results.count;
    for (var i = 0; i < results.products.length; i++) {
      results.products[i].provider = results.providers[i];
    }
    indexProducts = filterProducts(results.products);

    $scope.clusters = [];
    var categoryList = ["促销", "热门", "推荐"];
    var categoryName = {
      "促销": "促销特价",
      "热门": "热门线路",
      "推荐": "产品经理推荐",
    };
    categoryList.forEach(function(category) {
      var productList = indexProducts.filter(function(product) {
        $log.log(product.category);
        return product.category == category;
      });
      if (productList) {
        $scope.clusters.push({title: categoryName[category], products: productList});
      }
    })
  });

  function getKeyName(key) {
    switch (key) {
      case "酒店标准":
        return "hotelStandard";
      case "交通方式":
        return "transph4tStandard";
      case "类型":
        return "type";
      case "行程天数":
        return "stopDay";
      case "供应商":
        return "provider";
      case "大区":
        return "area";
      case "分区":
        return "subarea";
      case "出发城市":
        return "start";
      case "邮轮公司":
        return "youlunCompany";
      case "邮轮航线":
        return "youlunRoute";
      case "邮轮名称":
        return "youlunName";
      default:
        return "";
    }
  }
};

