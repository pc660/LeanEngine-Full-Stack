'use strict';

const fs = require('fs');
var pdf = require('html-pdf');
var swig  = require('swig');
const AV = require('leanengine');
const tool = require('./tool');
var productApi = {};
const config = require('./config');
const userApi = require('./user');
const multiChoiceConfig = require('./config/multiChoiceConfig');

productApi.add = (req, res) => {
  tool.l('product.add');
  var user = req.user;
  var product = req.body.product;
  var productAV = AV.Object.new('Product');
  tool.l(product);
  // TODO: Maybe we should use a for loop.
  productAV.set('productName', product.productName);
  productAV.set('fullName', product.fullName);
  productAV.set('start', product.start);
  productAV.set('type', product.type);
  //productAV.set('responsible', product.responsible);
  var responsibleAV = AV.Object.createWithoutData('_User', product.responsible);
  productAV.set('responsible', responsibleAV);
  var platformcontactAV = AV.Object.createWithoutData('_User', product.platformcontact);
  productAV.set('platformcontact', platformcontactAV);

  productAV.set('price', product.price);
  productAV.set('hotelStandard', product.hotelStandard);
  productAV.set('transportStandard', product.transportStandard);
  productAV.set('area', product.area);
  productAV.set('stopDay', product.stopDay);
  productAV.set('prefix', Object.keys(product.prefix));
  productAV.set('duration', product.duration);
  productAV.set('hotelDuration', product.hotelDuration);

  productAV.set('productManager', product.productManager);
  var provider = AV.Object.createWithoutData('Provider', product.pickedProvider.objectId);
  productAV.set('provider', provider);

  // HTML
  productAV.set("description", product.description); 
  productAV.set("itinerary", product.itinerary); 
  productAV.set("priceInclude", product.priceInclude);
  productAV.set("priceExclude", product.priceExclude);
  productAV.set("selfPaid", product.selfPaid);
  productAV.set("visaInfo", product.visaInfo); 
  productAV.set("reserveInfo", product.reserveInfo);
  productAV.set("restriction", product.restriction);
  productAV.set("createdBy",  user);

  var contact = AV.Object.createWithoutData('Contact', product.contactId);
  productAV.set("contact",  contact);

  // set unpassed
  productAV.set("status", config.productStatus.UNPOSTED);
  // Also store the itinerary and html data.
  productAV.set("itinerary", product.itinerary);
  productAV.set("priceInclude", product.priceInclude);
  productAV.set("priceExclude", product.priceExclude);
  productAV.set("selfPaid", product.selfPaid);
  productAV.set("visaInfo", product.visaInfo);
  productAV.set("reserveInfo", product.reserveInfo);
  productAV.set("restriction", product.restriction);

  productAV.save().then(function(productResult) {
      tool.l("success");
      res.send("success");
      // Now we store thte pdf file.
      // Need to be careful to set this. This is not safe.
      // We probably have to check any javascript stuff or link stuff here.
      // This is a probably a huge project.
      var params = productApi.constructItinerayParams(product);
      swig.setDefaults({autoescape: false});
      var file = swig.renderFile('server-modules/static/itinerary.html', {
        product: params,
      });

      var objectId = productResult.id;
      var options = { format: 'Letter'};
      pdf.create(file, options).toBuffer(function(err, buffer) {
        var filename = objectId + "_行程" + ".pdf";
        var file = new AV.File(filename, buffer);
        productResult.set("itineraryFile", file);
        productResult.save();
      });
  }, function(error) {
    // 失败
    tool.l(error);
      tool.l("fail");
      res.send({
        message: error.message,
        code: error.code,
      });
    });
};

productApi.constructItinerayParams = (product) => {
  var params = {};
  var price = product.price;
  var priceArray = productApi.parsePriceMap(price, product.duration);
  tool.l(priceArray);
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
  for (var i = 0; i < params.itinerary; i++) {
    params.itinerary[i].index = i + 1;
  }
  params.priceInclude = product.priceInclude;
  params.priceExclude = product.priceExclude;
  params.selfPaid = product.selfPaid;
  params.visaInfo = product.visaInfo;
  params.reserveInfo = product.reserveInfo;
  params.restriction = product.restriction;
  return params;
};

// Construct an array instead of a map to fill in the template.
// TODO: Maybe use different prices.
productApi.parsePriceMap = (priceMap, duration) => {
  var priceArray = [];
  for (var year in priceMap) {
    var yearEvents = priceMap[year];
    for (var month = 0; month < yearEvents.length; month++) {
      var monthEvents = yearEvents[month];
      for (var day = 0; day < monthEvents.length; day++) {
        var price = monthEvents[day];
        if (price) {
          var priceObject = {};
          var dayNumber = day + 1;
          var date = new Date(year, month, day + 1);
          var startDate = year + "年" + month + "月" + dayNumber + "日";
          var endDate = new Date(year, month, day + 1);
          endDate.setDate(endDate.getDate() + duration);
          var endDate = year + "年" + month + "月" + endDate.getDate() + "日";
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
  var query = new AV.Query('Product');
  var status = req.body.status;

  tool.l(status);
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
      console.log('Error: ' + error.code + ' ' + error.message);
    });
};

productApi.get = (req, res) => {
  tool.l('product.get');
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
  tool.l('product.search');
  var query = new AV.Query('Product');
  var params = req.body.query;
  // Must login and do stuff.
  tool.l(params);
  // TODO: uncomment this.
  var user = userApi.getCurrentUser(req);
  /*if (!user) {
    res.status(404).send();
    return;
  }*/

  // Some special handling for search params.
  if (params.self) {
    query.equalTo("createdBy", user);
    delete(params.self);
  } else if (params.myResponsible) {
    query.equalTo("responsible", user);
    delete(params.myResponsible);
  }

  // Check all query parameters.
  for (var key in params) {
    switch (key) {
      case "hotelStandard":
        query.equalTo("hotelStandard", params["hotelStandard"]);
        break;
      case "transportStandard":
        query.equalTo("transportStandard", params["transportStandard"]);
        break;
      case "type":
        query.equalTo("type", params["type"]);
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
    }
  }
  // TODO: add start date.
  // TODO: add days.
  query.include("responsible", "provider");
  query.find().then(function(products) {
    tool.l('Successfully retrieved ' + products.length);
    // Need to check min date and max date.
    if (params.startDate || params.endDate) {
      var filterProducts = [];
      products.forEach(function(product) {
        var price = product.get("price");
        if (productApi.checkPriceWithinDate(product.get("price"), params.startDate, params.endDate)) {
          filterProducts.push(product);
        }
      })
      products = filterProducts;
    }

    if (params.start) {
      tool.l("start");
      filterProducts = [];
      products.forEach(function(product) {
        var start = product.get("start");
        if (start.province === params.start.province && start.city === params.start.city) {
          filterProducts.push(product);
        }
      })
      products = filterProducts;
    }

    // Also need to retrieve user information.
    var responsible = products.map(function(product) {
      return product.get("responsible");
    });
    var providers = products.map(function(product) {
      return product.get("provider");
    });

    tool.l(products);
    res.send({products: products, responsible: responsible, providers: providers});
    return;
  }, function(error) {
    // TODO: handle error.
    tool.l(error);
  });
};

productApi.checkPriceWithinDate = (priceMap, minDate, maxDate) => {
  // Make the startDate as the current time.
  var currentDate = new Date();
  var startDate = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate() - 1
  };
  var endDate = {
    year: 2050,
    month: 11,
    date: 30
  };
  if (minDate) {
    // Parse date
    productApi.parseDate(minDate, startDate);
  }

  if (maxDate) {
    productApi.parseDate(maxDate, endDate);
  }

  var years = Object.keys(priceMap);
  return years.some(function(year) {
    if (year >= startDate.year && year <= endDate.year) {
      var month = priceMap[year];
      var startMonth = 0;
      var endMonth = 11;
      if (year == startDate.year) {
        startMonth = startDate.month;
      }
      if (year == endDate.year) {
        endMonth = endDate.month;
      }

      for (var i = startMonth; i <= endMonth; i++) {
        var dates = month[i];
        var startDay = 0;
        var endDay = dates.length;
        if (i == startMonth && year == startDate.year) {
          startDay = startDate.date;
        }
        if (i == endMonth && year == endDate.year) {
          endDay = endDate.date;
        }

        for (var j = startDay; j <= endDay; j++) {
          if (dates[j] && Object.keys(dates[j]).length > 0) {
            return true;
          }
        }
      }
    }
  })
};

productApi.parseDate = (dateString, dateObject) => {
  var re = /([0-9]+)年([0-9]+)月([0-9]+)日/;
  var match = dateString.match(re);
  if (match.length == 4) {
    dateObject.year = match[1];
    dateObject.month = match[2] - 1;
    dateObject.date = match[3];
  }
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
  var query = new AV.Query('Customer');
  var params = JSON.parse(req.body.query);
  query.equalTo("identifier", params.identifier);
  var customer;
  tool.l(params);
  query.find().then(function(results) {
    tool.l("query get success");
    // Check if the user already signin.
    for (var i = 0; i < results.length; i++) {
      var customer = results[i];
      if (customer.productid == params.productId) {
        tool.l("duplicate productId");
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
      tool.l("customer success");
      res.send(customer);
    }, function(error) {
      tool.l("customer fail");
      res.status(error.code).send();
    });
  }, function(error) {
    tool.l("fail");
  });
  // We need to check whether there are multiple users.
};

productApi.getUnverified = (req, res) => {
  // Check if user logged in.
  tool.l("product.getUnverified");
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
  var user = req.user;
  tool.l(user);
  if (user === undefined) {
    res.status(404).send();
    return;
  }

  var query = new AV.Query('Product');
  query.equalTo("responsible", user);
  query.equalTo("status", config.productStatus.UNVERIFIED);
  query.count().then(function(value) {
    tool.l(value);
    res.send({count: value});
  }, function(error) {
    tool.l(error);
    res.send({count: 0});
  });
};

productApi.verify = (req, res) => {
  tool.l("product.verify");
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

productApi.getProductsCount = (req, res) => {
  tool.l('product.getProductsCount');

  var all = req.body.all;
  // Execute three queries.
  var query1 = new AV.Query('Product').equalTo("status", config.productStatus.UNPOSTED).count();
  var query2 = new AV.Query('Product').equalTo("status", config.productStatus.UNVERIFIED).count();
  var query3 = new AV.Query('Product').equalTo("status", config.productStatus.VERIFIED).count();
  Promise.all([query1, query2, query3]).then(function(values) {
    res.send({unposted: values[0], unverified: values[1], verified: values[2]});
  });
};

module.exports = productApi;
