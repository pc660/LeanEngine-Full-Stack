'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
let provider = {};

var LIMIT = 50;

provider.add = (req, res) => {
  tool.l('provider.add');
  // TODO: now we use a fake data to create a provider.
  // First we create a user for the provider.
 
  var body = req.body
  // TODOw: maybe we can use a for loop?
  var user = new AV.User();
  user.set('username', body.username);
  user.set('password', body.password);
  user.signUp().then(function(user) {
    // Now add provider with this user. 
    // Redirect to the page.
    provider.addProvider(req, res, user);
  }, function(error) {
    console.log('Error: ' + error.code + ' ' + error.message);
    res.send({
        code: error.code,
        message: error.message      
    });
  });
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


provider.addProvider = (req, res, user) => {
  tool.l('provider.addProvider');
  var body = req.body;
  tool.l(body);
  var providerAV = AV.Object.new('Provider');
  
  providerAV.set('contactname', body.contactname);
  providerAV.set('sex', body.sex);
  providerAV.set('homehone', body.homephone);
  providerAV.set('fax', body.fax);
  providerAV.set('cellphone', body.cellphone);
  providerAV.set('qqnumber', body.qqnumber);
  providerAV.set('wechat', body.wechat);

  // Set 经营范围.
  providerAV.set('arrival', body.arrival);
  providerAV.set('departure', body.departure);
  providerAV.set('dominal', body.dominal);
  providerAV.set('ticketDelegate', body.ticketDelegate);
  providerAV.set('bookhotel', body.bookhotel);
  
  // 设置地址
  providerAV.set('province', body.province);
  providerAV.set('city', body.city);
  providerAV.set('county', body.county);
  providerAV.set('address', body.address);
  
  providerAV.set('nickname', body.nickname);
  providerAV.set('companyname', body.companyname);
  providerAV.set('zipcode', body.zipcode);
  providerAV.set('foundTime', body.foundTime);
  providerAV.set('companySize', body.companySize);
  providerAV.set('capital', body.capital);
  providerAV.set('license', body.license);
  providerAV.set('licenseStart', body.licenseStart);
  providerAV.set('licenseEnd', body.licenseEnd);
  providerAV.set('taxnumber', body.taxnumber);
  providerAV.set('mainBusiness', body.mainBusiness);
  providerAV.set('mainDestination', body.mainDestination);
  providerAV.set('contract', body.contract);
  providerAV.set('contractStart', body.contractStart);
  providerAV.set('contractEnd', body.contractEnd);
  providerAV.set('returnPolicyPeople', body.returnPolicyPeople);
  providerAV.set('returnPolicyPerPeople', body.returnPolicyPerPeople);
  providerAV.set('returnPolicyRevenue', body.returnPolicyRevenue);
  providerAV.set('returnPolicyMoney', body.returnPolicyMoney);
  providerAV.set("businessScope", returnBusinessScope(body, providerAV));
  providerAV.set('servingType', returnServingType(body, providerAV));
  providerAV.set('user', user);
 
  // Find the files.
  var File = AV.Object.extend('_File');
  var query = new AV.Query(File);
  tool.l(body.licenseFilename); 
  query.equalTo("name", body.licenseFilename);
  query.first().then(function(result) {
    if (result !== undefined) {
      var file = AV.File.createWithoutData(result.getObjectId());
      providerAV.set("licenseFile", file);
    }
    providerAV.save().then(function() {
      tool.l("success");
      res.send();  
    }, function(error) {
      tool.l(error);
      // 失败
    });
  }, function(response) {
  });  
};

/**
 * @method: POST
 * @params: providerId
 * */
provider.getReturnPolicy = (req, res) => {
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
provider.get = (req, res) => {
  tool.l('provider.get');
  var body = req.body;
  tool.l(body);
  var queryParameters = JSON.parse(body.query);
  var query = new AV.Query('Provider');
  query.limit(LIMIT);
  if (queryParameters.index !== undefined) {
    var index = parseInt(queryParameters.index);
    query.skip(index * LIMIT);
    delete queryParameters.index;
  }
  for (var key in queryParameters) {
    tool.l(key);
    query.equalTo(key, queryParameters[key]);
  }
  query.count().then(function(count) {
    query.find().then(function(results) {
      tool.l('Successfully retrieved ' + results.length + ' posts.');
      // 处理返回的结果数据
      // Extract user contact information.
      res.send({"count": count, "providers": results});
    }, function(error) {
      tool.l('Error: ' + error.code + ' ' + error.message);
    }); 
  }, function(error) {
    // TODO: handle error.
  });
  
};


provider.uploadfile = (req, res) => {
  tool.l("uploadfile");
  var files = req.files.file;

  for (var filename in files) {
    var file = files[filename];
    var path = file.path;
    var fsiz = file.size;
    var buffer = new Buffer(fsiz);
 
    fs.readFile(path, function (err, data) {
      var avFile = new AV.File(filename, data);
      avFile.save().then(function(obj) {
        tool.l("success");
        res.send();
      }, function(err) {
      });
      // TODO: Fix the http response logic. 
      // set http code accordingly.
      // This is too fragile and not acceptable.
    });
  }

};

provider.search = (req, res) => {
  tool.l('provider.search');
  tool.l(req.body.query);
  var query = JSON.parse(req.body.query);
  var keyword = query.keyword;
  var mainQuery = new AV.Query('Provider');
  if (query.keyword) {
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
  }
  mainQuery.find()
  .then(function(results) {
    res.send(results);
  }, function(error) {
    // TODO: handle error.
  });
};
module.exports = provider;
