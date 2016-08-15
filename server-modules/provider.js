'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
const config = require('./config');
let providerApi = {};

var LIMIT = 50;

providerApi.add = (req, res) => {
  tool.l('provider.add');
  // TODO: now we use a fake data to create a provider.
  // First we create a user for the provider.
  tool.l(req.body.provider);
  var provider = req.body.provider;
  if (provider === undefined) {
    res.status(404).send();
    return;
  }
  var user = req.user;
  if (!user && !user.isCurrent()) {
    res.status(404).send();
    return;
  }
  //user = AV.User.current();
  tool.l(AV.User.current());
  // TODOw: maybe we can use a for loop?
  //var user = new AV.User();
  //user.set('username', provider.username);
  //user.set('password', provider.password);
  var contactAV = AV.Object.new('Contact');
  contactAV.set('contactname', provider.contactname);
  contactAV.set('cellphone', provider.cellphone);
  contactAV.set('homephone', provider.homephone);
  contactAV.set('qqnumber', provider.qqnumber);
  contactAV.set('wechat', provider.wechat);
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
  var providerAV = AV.Object.new('Provider');
  // 设置地址
  providerAV.set('address', provider.address);

  // 设置基本信息.
  providerAV.set('nickname', provider.nickname);
  providerAV.set('companyname', provider.companyname);

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
  if (!filename) {
    providerAV.save().then(function (provider) {
      res.send(provider.id);
      user.set("provider", provider);
      user.save();
      contact.set("provider", provider);
      contact.save().then(function() {
        tool.l("contact success");
        return;
      });
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
      res.send(provider.id);
      user.set("provider", provider);
      user.save().then(function() {
        tool.l("user success");
      }, function(error) {
        tool.l(error);
      });
      contact.set("provider", provider);
      contact.save().then(function() {
        tool.l("contact success");
        return;
      });
    })

  }, function(response) {
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
  query.limit(LIMIT);
  /*
  if (queryParameters.index !== undefined) {
    var index = parseInt(queryParameters.index);
    query.skip(index * LIMIT);
    delete queryParameters.index;
  }

  for (var key in queryParameters) {
    tool.l(key);
    query.equalTo(key, queryParameters[key]);
  }*/

  query.find().then(function(results) {
    tool.l('Successfully retrieved ' + results.length + ' posts.');
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
    tool.l('Error: ' + error.code + ' ' + error.message);
  });
  
};

// Now we only support upload one file.
providerApi.uploadfile = (req, res) => {
  tool.l("uploadfile");
  var file = req.files.file;
  tool.l(req.files);
  if (!file) {
    tool.l("find no files");
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
      tool.l("upload success");
      res.send();
    }, function(err) {
    });
    // TODO: Fix the http response logic.
    // set http code accordingly.
    // This is too fragile and not acceptable.
  });
};

providerApi.delete = (req, res) => {
  tool.l("provider.delete");
  var provider = AV.Object.createWithoutData("Provider", req.body.providerId);
  // Check if the provider has any products.
  var query = new AV.Query("Product");
  query.equalTo("provider", provider);
  query.equalTo("status", config.productStatus.VERIFIED);
  query.find().then(function(results) {
    if (results.length > 0) {
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
  tool.l(req.body.query);
  var query = req.body.query;
  var select = req.body.select;
  var mainQuery = new AV.Query('Provider');
  tool.l(select);
  if (select && select.length > 0) {
    mainQuery.select(select);
  }
  if (query.self) {
    var user = req.user;
    if (!user) {
      res.status(404).send();
      return;
    }
    var provider = user.get("provider");
    //mainQuery.equalTo("user", user);
  }

  /*if (query.keyword) {
    var nicknameQuery = new AV.Query('Provider');
    nicknameQuery.contains('nickname', keyword);
    var capitalQuery = new AV.Query('Provider');
    capitalQuery.contains("capital", keyword);
    mainQuery = AV.Query.or(nicknameQuery, capitalQuery);
  }
  if (query.mainDestination) {
    mainQuery.contains('mainDestination', query.mainDestination);
  }
  if (query.servingType) {
    mainQuery.equalTo(query.servingType, true);
  }*/
  mainQuery.find().then(function(results) {
    tool.l('Successfully retrieved ' + results.length + ' results.');
    res.send(results);
  }, function(error) {
    // TODO: handle error.
  });
};
module.exports = providerApi;
