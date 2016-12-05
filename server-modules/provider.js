'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
const config = require('./config');
let providerApi = {};

var LIMIT = 50;

providerApi.add = (req, res) => {

  tool.l('provider.add');
  // Error checking.
  var provider = req.body.provider;
  if (provider === undefined) {
    tool.e('no provider info when provider.add');
    res.status(404).send();
    return;
  }
  var user = req.user;
  if (!user && !user.isCurrent()) {
    tool.e('user is undefined or not current when provider.add ');
    res.status(404).send();
    return;
  }

  var log = AV.Object.new("AccessLog");
  log.set("operation", "provider.add");
  log.set("data", {provider: req.body.provider});
  log.set("user", req.user);
  log.save();
  // TODO: maybe we can use a for loop?
  //var user = new AV.User();
  //user.set('username', provider.username);
  //user.set('password', provider.password);
  var contactAV = AV.Object.new('Contact');
  contactAV.set('contactname', provider.contactname);
  contactAV.set('cellphone', provider.cellphone);
  contactAV.set('homephone', provider.homephone);
  contactAV.set('qqnumber', provider.qqnumber);
  contactAV.set('wechat', provider.wechat);
  if (provider.objectId) {
    contactAV = null;
  }
  providerApi.addProvider(provider, res, user, contactAV);
};

function returnServingType(body, provider) {
  var servingTypeList = [
    'domestieOperator',
    'domestieWholesaler',
    'airticket',
    'motorcade',
    'visa',
    'ticket',
    'hotel',
    'cruises',
  ]
 
  var servingType = []; 
  for (var key in servingTypeList) {
    if (body[key] != 'on') {
      servingType.push(servingTypeList[key]);
      provider.set(servingTypeList[key], true);
    }
  }
  return servingType;
}

// TODO: This is also ugly. Maybe should deal it in the client side?
function returnBusinessScope(body, provider) {
  var businessScopeList = [
    'departure',
    'arrival',
    'dominal',
    'ticketDelegate',
    'bookhotel',
  ];
  
  var businessScope = [];
  for (var key in businessScopeList) {
    if (body[key] == 'on') {
      businessScope.push(businessScopeList[key]);
      provider.set(businessScopeList[key], true);
    }
  }
  return businessScope;
}

providerApi.addProvider = (provider, res, user, contact) => {
  tool.l('provider.addProvider');
  var providerAV;
  var isNew = true;
  if (provider.objectId) {
    providerAV = AV.Object.createWithoutData("Provider", provider.objectId);
    isNew = false;
  } else {
    providerAV = AV.Object.new('Provider');
    providerAV.set("createdBy", user);
  }
  // 设置地址
  providerAV.set('address', provider.address);

  // 设置基本信息.
  providerAV.set('nickname', provider.nickname);
  providerAV.set('companyname', provider.companyname);
  providerAV.set('area', provider.area);

  // 设置主营业务.
  providerAV.set('destination', Object.keys(provider.destination));
  providerAV.set('start', Object.keys(provider.start));

  // 设置业务资源.
  providerAV.set('customerResource', provider.customerResource);
  providerAV.set('flightResource', provider.flightResource);
  providerAV.set('productResource', provider.productResource);

  // 设置加返政策.
  providerAV.set('returnPolicy', provider.returnPolicy);

  // Find the files.

  var filename = provider.licenseFilename;
  var level = user.get("level");
  if (!filename) {
    providerAV.save().then(function (provider) {
      res.send();
      if (isNew && level == 2) {
        user.set("provider", provider);
        user.save();
      }
      if (contact) {
        contact.set("provider", provider);
        contact.save();
      }
      return;
    }, function(error) {
      tool.l(error);
    });
  }

  var File = AV.Object.extend('_File');
  var query = new AV.Query(File);
  query.equalTo("name", provider.licenseFilename);
  query.first().then(function(result) {
    if (result !== undefined) {
      var file = AV.File.createWithoutData(result.getObjectId());
      providerAV.set("licenseFile", file);
    }
    providerAV.save().then(function(provider) {
      tool.l("success");
      res.send();
      if (isNew && level == 2) {
        user.set("provider", provider);
        user.save();
      }
      if (contact) {
        contact.set("provider", provider);
        contact.save().then(function() {
          return;
        });
      }
      return;
    }, function(error) {
      tool.l(error);
    })

  }, function(response) {
    tool.l(response);
  });
};

/**
 * @method: POST
 * @params: providerId
 * */
providerApi.getReturnPolicy = (req, res) => {
  tool.l('provider.getReturnPolicy');
  var id = req.body.providerId;
  var query = new AV.Query('Provider');
  query.equalTo('objectId', id);
  // 显示加返政策.
  query.select(
    'returnTotalPeople',
    'returnTotalRevenue',
    'returnMoneyEachPeople',
    'returnMoneyRevenue',
    'paidPeople',
    'paidRevenue');
  query.find().then(function(results) {
    tool.l(results[0]);
    if (results.length > 0) {
      res.send(results[0]);
    } 
  }, function(error) {
  })
};

// get the provvider according to the query in req.
// TODO: Speed is not fast. We probably need cache here.
providerApi.get = (req, res) => {
  tool.l('provider.get');
  var body = req.body;
  var queryParameters = body.query;
  var query = new AV.Query('Provider');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "provider.get");
  log.set("data", {query: body.query});
  log.set("user", req.user);
  log.save();
  /*query.limit(LIMIT);

  if (queryParameters.index !== undefined) {
    var index = parseInt(queryParameters.index);
    query.skip(index * LIMIT);
    delete queryParameters.index;
  }*/
  if (queryParameters.index !== undefined) {
    delete queryParameters.index;
  }

  for (var key in queryParameters) {
    query.equalTo(key, queryParameters[key]);
  }

  var user = req.user;
  if (!user) {
    res.send(404);
    return;
  }

  var level = user.get("level");
  if (level != 0) {
    query.equalTo("createdBy", user);
  }
  query.find().then(function(results) {
    // 处理返回的结果数据
    // Extract user contact information.
    // For each result, we need to retrieve the contact list.
    var promises = [];
    for (var i = 0; i < results.length; i++) {
      var query = new AV.Query('Contact');
      var provider = results[i];
      query.equalTo("provider", provider);
      promises.push(query.find());
    }
    Promise.all(promises).then(function(contactList) {
      res.send({ "providers": results, "contacts": contactList});
      return;
    });
  }, function(error) {
    tool.e('Error: ' + error.code + ' ' + error.message + ' when provider.get');
  });
  
};

// Now we only support upload one file.
providerApi.uploadfile = (req, res) => {
  tool.l("provider.uploadfile");
  var log = AV.Object.new("AccessLog");
  log.set("operation", "provider.uploadfile");
  log.set("user", req.user);
  log.save();
  var file = req.files.file;
  tool.l(req.files);
  if (!file) {
    tool.e("find no files when provider.uploadfile");
    res.send();
  }

  var path = file.path;
  var fsiz = file.size;
  var buffer = new Buffer(fsiz);
  var filename = req.body.filename;
  if (!filename) {
    filename = file.originalFilename;
  }
  fs.readFile(path, function (err, data) {
    var avFile = new AV.File(req.body.filename, data);
    avFile.save().then(function(obj) {
      res.send();
    }, function(err) {
    });
  });
};

providerApi.delete = (req, res) => {
  tool.l("provider.delete");
  var log = AV.Object.new("AccessLog");
  log.set("operation", "provider.delete");
  log.set("data", {"provider": req.body.providerId});
  log.set("user", req.user);
  log.save();
  var provider = AV.Object.createWithoutData("Provider", req.body.providerId);
  // Check if the provider has any products.
  var query = new AV.Query("Product");
  query.equalTo("provider", provider);
  query.equalTo("status", config.productStatus.VERIFIED);
  query.find().then(function(results) {
    if (results.length > 0) {
      tool.e("Have verified products when provider.delete");
      res.send(404);
    } else {
      provider.destroy().then(function() {
        res.send();
      }, function(error) {
        res.send(404);
      });
    }
  })
};

providerApi.search = (req, res) => {
  tool.l('provider.search');
  var log = AV.Object.new("AccessLog");
  log.set("operation", "provider.search");
  log.set("data", {"query": req.body.query, "select": req.body.select});
  log.set("user", req.user);
  log.save();
  var query = req.body.query;
  var select = req.body.select;
  var mainQuery = new AV.Query('Provider');
  if (select && select.length > 0) {
    mainQuery.select(select);
  }
  if (query.self) {
    var user = req.user;
    if (!user) {
      tool.e("user is undefined when provider.search")
      res.status(404).send();
      return;
    }
    var provider = user.get("provider");
  }

  mainQuery.find().then(function(results) {
    tool.l('Successfully retrieved ' + results.length + ' results.');
    res.send(results);
  }, function(error) {
    // TODO: handle error.
  });
};
module.exports = providerApi;
