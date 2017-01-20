'use strict';

const fs = require('fs');
var pdf = require('html-pdf');
var swig  = require('swig');
const AV = require('leanengine');
const tool = require('./tool');
var productApi = {};
const global = require('./global');
const config = require('./config');
const userApi = require('./user');
const tal = require('template-tal');
const multiChoiceConfig = require('./config/multiChoiceConfig');

function updateProductValidateMap(product) {
  // Check if validationMap exists.
  var maxDate = product.get("maxDate");
  //var validationMap = new AV.Object("ProductValidationMap");
  var query = new AV.Query('ProductValidationMap');
  query.equalTo("date", maxDate.toString());
  query.find().then(function(result) {
    tool.l(result);
    if (result.length == 0) {
      var validationMap = new AV.Object("ProductValidationMap");
      validationMap.set("date", maxDate.toString());
      validationMap.set("product", [product.id]);
      validationMap.save().then(function(test) {
        tool.l("success");
        tool.l(test);
      }, function(error) {
        tool.l(error);
      });
    } else {
      var validationMap = result[0];
      validationMap.add("product", [product.id]);
      validationMap.save();
    }
  }, function(error) {
    tool.l(error);
  })
}

function setProduct(productAV, product) {
  productAV.set('productName', product.productName);
  productAV.set('fullName', product.fullName);
  productAV.set('startCity', product.startCity);
  productAV.set('type', product.type);
  if (!product.category) {
    productAV.set('category', "普通");
  }
  //productAV.set('responsible', product.responsible);
  if (product.responsible) {
    var responsibleAV = AV.Object.createWithoutData('_User', product.responsible.objectId);
    productAV.set('responsible', responsibleAV);
  }
  if (product.platformcontact) {
    var platformcontactAV = AV.Object.createWithoutData('_User', product.platformcontact.objectId);
    productAV.set('platformcontact', platformcontactAV);
  }

  var price = product.price;
  setDefaultPriceMap(price);
  var minMaxDate = getMinMaxDate(price);
  if (minMaxDate.length > 1) {
    productAV.set("minDate", new Date(minMaxDate[0]));
    productAV.set("maxDate", new Date(minMaxDate[1]));
  }
  productAV.set('price', product.price);
  productAV.set('hotelStandard', product.hotelStandard);
  productAV.set('transportStandard', product.transportStandard);
  productAV.set('area', product.area);
  productAV.set('subarea', product.subarea);
  if (product.detailArea) {
    productAV.set('detailArea', product.detailArea);
  }
  productAV.set('stopDay', product.stopDay);
  productAV.set('prefix', Object.keys(product.prefix));
  productAV.set('duration', product.duration);
  productAV.set('hotelDuration', product.hotelDuration);

  if (product.pickedProvider) {
    var provider = AV.Object.createWithoutData('Provider', product.pickedProvider.objectId);
    productAV.set('provider', provider);
  }

  // HTML
  productAV.set("description", product.description);
  productAV.set("itinerary", product.itinerary);
  productAV.set("priceInclude", product.priceInclude);
  productAV.set("priceExclude", product.priceExclude);
  productAV.set("selfPaid", product.selfPaid);
  productAV.set("visaInfo", product.visaInfo);
  productAV.set("shoppingInfo", product.shoppingInfo);
  productAV.set("reserveInfo", product.reserveInfo);
  productAV.set("restriction", product.restriction);
  productAV.set("reminder", product.reminder);
  productAV.set("youlunCompany", product.youlunCompany);
  productAV.set("youlunRoute", product.youlunRoute);
  productAV.set("youlunName", product.youlunName);

  if (product.contact) {
    var contact = AV.Object.createWithoutData('Contact', product.contact.objectId);
    productAV.set("contact",  contact);
  }

  // set unpassed
  productAV.set("status", config.productStatus.UNPOSTED);

  var selfPaidList = product.selfPaidList;
  var selfPaidAV = AV.Object.new("SelfPaid");
  // Need to create a new list.
  if (selfPaidList) {

    if (selfPaidList.objectId) {
      selfPaidAV = AV.Object.createWithoutData('SelfPaid', selfPaidList.objectId);
    }

    var clonedList =JSON.parse(JSON.stringify(selfPaidList));
    var productPaidList = {};
    productPaidList.items = [];
    for (var i = 0; i < clonedList.items.length; i++) {
      var item = clonedList.items[i];
      if (item.picked) {
        productPaidList.items.push(item);
      }
    }
    productAV.set("selfPaidList", productPaidList);
    productAV.set("selfPaid", constructSelfPaidContent(productPaidList));
    product.selfPaid = constructSelfPaidContent(productPaidList);
    for (var i = 0; i < selfPaidList.items.length; i++) {
      selfPaidList.items[i].picked = false;
    }

    // Only do this if not changing product.
    if (!product.objectId) {
      selfPaidAV.set("name", selfPaidList.name);
      selfPaidAV.set("items", selfPaidList.items);
      selfPaidAV.save();
    }
  }
}

function constructSelfPaidContent(productPaidList) {
  var items = productPaidList.items;
  var content = "";
  for (var i = 0; i < items.length; i++) {
    if (i == 0) {
      content += "\n";
    }
    var item = items[i];
    content += "项目名称: " + item.name + "\n";
    content += "项目描述: " + item.description + "\n";
    content += "项目费用: " + item.fee + "\n";
  }
  return content;
}

productApi.updateIndex = (req, res) => {
  tool.l('product.updateIndex');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.updateIndex");
  log.set("data", {"product": req.body.productId, "indexPage": req.body.indexPage});
  log.set("user", req.user);
  log.save();

  var user = req.user;
  if (!user) {
    tool.e("user is undefined when product.updateCategory");
    res.send(404);
    return;
  }

  var productAV =  AV.Object.createWithoutData('Product', req.body.productId);
  productAV.set("indexPage", req.body.indexPage);
  productAV.save().then(function() {
    res.send();
  });
};

productApi.updateCategory = (req, res) => {
  tool.l('product.updateCategory');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.updateCategory");
  log.set("data", {"product": req.body.productId, "category": req.body.category});
  log.set("user", req.user);
  log.save();

  var user = req.user;
  if (!user) {
    tool.e("user is undefined when product.updateCategory");
    res.send(404);
    return;
  }

  var productAV =  AV.Object.createWithoutData('Product', req.body.productId);
  productAV.set("category", req.body.category);
  productAV.save().then(function() {
    res.send();
  });
};

productApi.add = (req, res) => {
  tool.l('product.add');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.add");
  log.set("data", {"product": req.body.product});
  log.set("user", req.user);
  log.save();

  var user = req.user;
  if (!user) {
    tool.e("user is undefined when product.add");
    res.send(404);
    return;
  }

  var product = req.body.product;
  var productAV = {};
  if (product.objectId) {
    var productAV =  AV.Object.createWithoutData('Product', product.objectId);
  } else {
    var productAV = AV.Object.new('Product');
    productAV.set("createdBy",  user);
  }
  setProduct(productAV, product);

  productAV.save().then(function(productResult) {
      res.send(productResult);
      // Now we store thte pdf file.
      // Need to be careful to set this. This is not safe.
      // We probably have to check any javascript stuff or link stuff here.
      // This is a probably a huge project.
      var params = productApi.constructItinerayParams(product);
      params.id = productResult.id;

      updateProductValidateMap(productResult);
      generateItinerary(params, productResult);
  }, function(error) {
    tool.l(error);
      res.send(error);
    });
};

productApi.constructItinerayParams = (product) => {
  var params = {};
  var price = product.price;
  var priceArray = productApi.parsePriceMap(price, product.duration);
  params.priceArray = priceArray;
  var prefixArray = Object.keys(product.prefix);
  // Construct the prefixArray from multiChoiceConfig.
  params.prefix = [];
  var data = multiChoiceConfig.data["线路前缀"];
  prefixArray.forEach(function(prefix) {
    for (var i = 0; i < data.length; i++) {
      if (prefix == data[i].name) {
        params.prefix.push(data[i].value);
        break;
      }
    }
  });
  params.title = product.productName;
  params.description = product.description;
  params.itinerary = product.itinerary;
  for (var i = 0; i < params.itinerary.length; i++) {
    params.itinerary[i].index = i + 1;
    if (!params.itinerary[i].food) {
      params.itinerary[i].food = {};
    }
    if (!params.itinerary[i].food.hasmorning) {
      params.itinerary[i].food.morning = "无";
    } else {
      if (params.itinerary[i].food.morning) {
        params.itinerary[i].food.morning = params.itinerary[i].food.morning.trim();
      }
      params.itinerary[i].food.morning = params.itinerary[i].food.morning || "提供"
    }
    if (!params.itinerary[i].food.hasnoon) {
      params.itinerary[i].food.noon = "无";
    } else {
      if (params.itinerary[i].food.noon) {
        params.itinerary[i].food.noon = params.itinerary[i].food.noon.trim();
      }
      params.itinerary[i].food.noon = params.itinerary[i].food.noon || "提供"
    }
    if (!params.itinerary[i].food.hasevening) {
      params.itinerary[i].food.evening = "无";
    } else {
      if (params.itinerary[i].food.evening) {
        params.itinerary[i].food.evening = params.itinerary[i].food.evening.trim();
      }
      params.itinerary[i].food.evening = params.itinerary[i].food.evening || "提供"
    }
  }
  params.priceInclude = product.priceInclude;
  params.priceExclude = product.priceExclude;
  params.selfPaid = product.selfPaid;
  params.visaInfo = product.visaInfo;
  params.reserveInfo = product.reserveInfo;
  params.restriction = product.restriction;
  params.shoppingInfo = product.shoppingInfo;
  params.reminder = product.reminder;
  if (product.pickedProvider) {
    params.account = product.pickedProvider.companyname;
  }
  return params;
};

// Construct an array instead of a map to fill in the template.
// TODO: Maybe use different prices.
productApi.parsePriceMap = (priceMap, duration) => {
  var priceArray = [];
  for (var year in priceMap) {
    var yearEvents = priceMap[year];
    for (var month in yearEvents) {
      var monthEvents = yearEvents[month];
      for (var day in monthEvents) {
        var price = monthEvents[day];
        if (price && Object.keys(price).length > 0) {
          var priceObject = {};
          var date = new Date(year, month, day);
          var startDate = year + "年" + (parseInt(month) + 1) + "月" + day + "日";
          var endDate = new Date(year, month, day);
          endDate.setDate(endDate.getDate() + parseInt(duration));
          var endDate = year + "年" + (parseInt(month) + 1) + "月" + endDate.getDate() + "日";
          priceObject.startDate = startDate;
          priceObject.endDate = endDate;
          priceObject.adultCompanySalePrice = price.adultCompanySalePrice;
          priceObject.childCompanySalePrice = price.childCompanySalePrice;
          priceArray.push(priceObject);
        }
      }
    }
  }
  return priceArray;
};

productApi.getAll = (req, res) => {
  tool.l('product.getAll');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.getAll");
  log.set("data", {"status": req.body.status});
  log.set("user", req.user);
  log.save();
  var query = new AV.Query('Product');
  var status = req.body.status;

  if (status) {
    switch(status) {
      case 1:
        query.equalTo("status", config.productStatus.UNPOSTED);
        break;
      case 2:
        query.equalTo("status", config.productStatus.UNVERIFIED);
        break;
      case 3:
        query.equalTo("status", config.productStatus.VERIFIED);
        break;
    }
  }
  query.select("productName", "responsible", "status", "price");
  query.include("responsible.contactname");
  query.find().then(function(products) {
    tool.l('Successfully retrieved ' + products.length + ' posts.');
    // Also need to return a list of responsible.
    // We have to do this because leancloud does not stringify nested objects.
    var contactname = products.map(function(product) {
      return product.get("responsible").get("contactname");
    });
    res.send({products: products, contactname: contactname});
    }, function(error) {
      res.send(error);
    });
};

productApi.get = (req, res) => {
  tool.l('product.get');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.get");
  log.set("data", {"id": req.body.id});
  log.set("user", req.user);
  log.save();
  var product = AV.Object.new('Product');
  product.id = req.body.id;
  var query = new AV.Query('Product');
  var result = {};
  query.equalTo('objectId', req.body.id);
  query.include("provider", "responsible", "contact", "platformcontact");
  query.find().then(function(results) {
   if (results.length == 1) {
     var product = results[0];
     // Fetch other information.
     res.send({product: product, provider: product.get("provider"),
       contact: product.get("contact"), platformcontact: product.get("platformcontact"),
       responsible:  product.get("responsible")});
   }
   // 处理返回的结果数据
  }, function(error) {
  console.log(error);
  });
};

productApi.search = (req, res) => {
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.search");
  log.set("data", {"query": req.body.query});
  log.set("user", req.user);
  log.save();
  var query = new AV.Query('Product');
  var params = req.body.query;
  if (params.searchQuery) {
    query.contains("fullName", params.searchQuery);
  }
  var user = req.user;
  if (!user) {
   res.status(404).send();
   return;
  }

  // Some special handling for search params.
  if (params.self) {
    query.equalTo("createdBy", user);
    delete(params.self);
  } else if (params.myResponsible) {
    query.equalTo("responsible", user);
    delete(params.myResponsible);
  }

  var index = 0;
  if (params.index) {
    index = params.index - 1;
    delete(params.index);
  }
  query.limit(config.items_per_page);
  query.skip(index * config.items_per_page);

  // Check all query parameters.
  for (var key in params) {
    switch (key) {
      case "hotelStandard":
        query.equalTo("hotelStandard", params["hotelStandard"]);
        break;
      case "transportStandard":
        query.equalTo("transportStandard", params["transportStandard"]);
        break;
      case "start":
        query.equalTo("startCity", params.start);
        break;
      case "type":
        query.equalTo("type", params["type"]);
        break;
      case "area":
        query.equalTo("area", params["area"]);
        break;
      case "subarea":
        query.equalTo("subarea", params["subarea"]);
        break;
      case "status":
        query.equalTo("status", parseInt(params["status"]));
        break;
      case "provider":
        var provider = AV.Object.createWithoutData('Provider', params["provider"]);
        query.equalTo("provider", provider);
        break;
      case "minDay":
        query.greaterThanOrEqualTo("duration", params["minDay"]);
        break;
      case "maxDay":
        query.lessThanOrEqualTo("duration", params["maxDay"]);
        break;
      case "category":
        query.equalTo("category", params.category);
        break;
      case "startDate":
        var startDate = tool.parseDate(params.startDate);
        query.greaterThanOrEqualTo("maxDate", startDate);
        break;
      case "endDate":
        var endDate = tool.parseDate(params.endDate);
        query.lessThanOrEqualTo("minDate", endDate);
        break;
      case "indexPage":
        query.equalTo("indexPage", params.indexPage);
        query.limit(1000);
        break;
      case "provider":
        query.equalTo("provider", params.provider);
        break;
      case "productId":
        query.equalTo("productId", parseInt(params.productId));
        break;
    }
  }

  query.addDescending("createdAt");
  query.include("responsible", "provider", "price");
  var queries = [query.find(), query.count()];
  // TODO: add start date.
  // TODO: add days.
  Promise.all(queries).then(function (results) {
    var products = results[0];
    if (products.length == 0) {
      res.send({products: [], responsible: [], providers: [], count: 0});
      return;
    }
    var price = products[0].get("price");
    // Also need to retrieve user information.
    var responsible = products.map(function (product) {
      return product.get("responsible");
    });
    var providers = products.map(function (product) {
      return product.get("provider");
    });

    // Figure out why sending array is impossible.
    res.send({products: products, responsible: responsible, providers: providers, count: results[1]});
    return;
  }, function (error) {
    tool.l(error);
    res.send(404);
    return;
  });
};

productApi.getResponsibles = (products) => {
  var promises = [];
  for (var i = 0; i < products.length; i++) {
    promises.push(products[i].get("responsible").fetch());
  }
  return promises;
}

// Add a user to the product.
productApi.signin = (req, res) => {
  tool.l('product.signin');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.signin");
  log.set("data", {"query": req.body.query});
  log.set("user", req.user);
  log.save();
  var query = new AV.Query('Customer');
  var params = JSON.parse(req.body.query);
  query.equalTo("identifier", params.identifier);
  var customer;
  query.find().then(function(results) {
    tool.l("query get success");
    // Check if the user already signin.
    for (var i = 0; i < results.length; i++) {
      var customer = results[i];
      if (customer.productid == params.productId) {
        res.status(409).send(); 
        return;
      }
    } 
    // Add the product.
    customer = AV.Object.new('Customer');
    customer.set('productname', params.productName);
    customer.set('state', params.state);
    customer.set('productid', params.productId);
    customer.set('identifier', params.identifier);
    customer.set('username', params.username);
    customer.set('phone', params.phone);
    customer.set('price', params.price);
    customer.save().then(function(response) {
      res.send(customer);
    }, function(error) {
      res.status(error.code).send();
    });
  }, function(error) {
    res.send(error);
  });
  // We need to check whether there are multiple users.
};

productApi.getUnverified = (req, res) => {
  // Check if user logged in.
  tool.l("product.getUnverified");
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.getUnverified");
  log.set("user", req.user);
  log.save();
  var user = req.user;
  if (user === undefined) {
    res.status(404).send();
    return;
  }
  var query = new AV.Query('Product');
  query.equalTo("responsible", user);
  query.find().then(function(results) {
    tool.l('Successfully retrieved ' + results.length + ' posts.');
    res.send(results);
  });
};

productApi.hasUnfinished = (req, res) => {
  tool.l("product.hasUnfinished");
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.hasUnfinished");
  log.set("user", req.user);
  log.save();
  var user = req.user;
  if (user === undefined) {
    res.status(404).send();
    return;
  }

  var query = new AV.Query('Product');
  query.equalTo("responsible", user);
  query.equalTo("status", config.productStatus.UNVERIFIED);
  query.count().then(function(value) {
    res.send({count: value});
  }, function(error) {
    tool.l(error);
    res.send({count: 0});
  });
};

productApi.verify = (req, res) => {
  tool.l("product.verify");
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.verify");
  log.set("data", {id: req.body.objectId});
  log.set("user", req.user);
  log.save();
  var id = req.body.objectId;
  tool.l(id);
  var status = req.body.status;
  var product = AV.Object.createWithoutData('Product', id);
  product.set("status", status);
  product.save().then(function(result) {
    tool.l(result);
    res.send();
  }, function(error) {
  });
};

productApi.delete = (req, res) => {
  tool.l("product.delete");
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.delete");
  log.set("data", {id: req.body.productId});
  log.set("user", req.user);
  log.save();
  var product = AV.Object.createWithoutData('Product', req.body.productId);
  product.destroy().then(function() {
    res.send();
  }, function(error) {
    res.send(404);
  })

};

productApi.getProductsCount = (req, res) => {
  tool.l('product.getProductsCount');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.getProductsCount");
  log.set("user", req.user);
  log.save();
  var all = req.body.all;
  // Execute three queries.
  var query1 = new AV.Query('Product').equalTo("status", config.productStatus.UNPOSTED).count();
  var query2 = new AV.Query('Product').equalTo("status", config.productStatus.UNVERIFIED).count();
  var query3 = new AV.Query('Product').equalTo("status", config.productStatus.VERIFIED).count();
  Promise.all([query1, query2, query3]).then(function(values) {
    res.send({unposted: values[0], unverified: values[1], verified: values[2]});
  });
};

function getMinMaxDate(priceMap) {
  var dateList = []
  for (var year in priceMap) {
    for (var month in priceMap[year]) {
      for (var day in priceMap[year][month]) {
        var date = new Date(year, month, day);
        dateList.push(date);
      }
    }
  }
  return [Math.min.apply(null, dateList), Math.max.apply(null, dateList)];
}

function setDefaultPriceMap(priceMap) {
  for (var year in priceMap) {
    for (var month in priceMap[year]) {
      for (var day in priceMap[year][month]) {
        var event = priceMap[year][month][day];
        tool.l(event);
        if (Object.keys(event).length > 3) {
          event.reservedPeopleNumber = 0;
          event.paidPeopleNumber = 0;
          event.restPeopleNumber = event.totalPeople;
        } else {
          delete priceMap[year][month][day];
        }
      }
    }
  }
};

function generateItinerary(params, productResult) {
  tool.l("generateItinerary");
  fs.readFile("server-modules/static/f05tal.doc","utf8", function(err, data) {
    recursiveIteration(params, function(object, property) {
      if (typeof object[property] === 'string') {
        object[property] = object[property].replaceAll("\n", "<w:br/>");
      }
    });

    tool.l(params);
    var result = tal.process(data, params).replaceAll("&lt;","<").replaceAll("&gt;", ">");
    var filename = params.id + "_行程" + ".doc";
    var file = new AV.File(filename, toUTF8Array(result));
    productResult.set("itineraryFile", file);
    productResult.save();
  });
};

function recursiveIteration(object, callback) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (typeof object[property] == "object"){
                recursiveIteration(object[property], callback);
            }else{
                //found a property which is not an object, check for your conditions here
                callback(object, property);
                
            }
        }
    }
};

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function toUTF8Array(str) {
  var utf8 = [];
  for (var i=0; i < str.length; i++) {
    var charcode = str.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode < 0x800) {
      utf8.push(0xc0 | (charcode >> 6),
          0x80 | (charcode & 0x3f));
    }
    else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(0xe0 | (charcode >> 12),
          0x80 | ((charcode>>6) & 0x3f),
          0x80 | (charcode & 0x3f));
    }
    // surrogate pair
    else {
      i++;
      // UTF-16 encodes 0x10000-0x10FFFF by
      // subtracting 0x10000 and splitting the
      // 20 bits of 0x0-0xFFFFF into two halves
      charcode = 0x10000 + (((charcode & 0x3ff)<<10)
          | (str.charCodeAt(i) & 0x3ff));
      utf8.push(0xf0 | (charcode >>18),
          0x80 | ((charcode>>12) & 0x3f),
          0x80 | ((charcode>>6) & 0x3f),
          0x80 | (charcode & 0x3f));
    }
  }
  return utf8;
}

productApi.getSelfPaid = (req, res) => {
  tool.l('product.getSelfPaid');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.getSelfPaid");
  log.set("user", req.user);
  log.save();
  var query = new AV.Query('SelfPaid');
  query.find().then(function(results) {
    res.send(results);
    return;
  })
}

productApi.clone = (req, res) => {
  tool.l('product.clone');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "product.clone");
  log.set("user", req.user);
  log.save();
  var productId = req.body.productId;
  var product = AV.Object.createWithoutData('Product', productId);
  product.fetch().then(function(result) {
    var newProduct = result.clone();
    // Set addition params.
    newProduct.set("status", 1);
    newProduct.save().then(function(result) {
      var price = product.get("price");
      setDefaultPriceMap(price);
      product.set("price", price);
      product.save().then(function(result) {
        res.send(result);
        return;
      })
    });
  })
}

module.exports = productApi;
