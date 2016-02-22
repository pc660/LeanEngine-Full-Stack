'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
let provider = {};

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
    'domestieOperaotr',
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

  providerAV.set('nickname', body.nickname);
  providerAV.set('compandyname', body.companyname);
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
  providerAV.save().then(function() {
      tool.l("success");
      res.send();  
    }, function(error) {
    // 失败
    });
};

// get the provvider according to the query in req.
// TODO: Speed is not fast. We probably need cache here.
provider.get = (req, res) => {
  tool.l('provider.get');
  var body = req.body;
  tool.l(body);
  var queryParameters = JSON.parse(body.query);
  var query = new AV.Query('Provider');
  query.equalTo('license', '123');  
  // TODO: uncomment this, right now we comment this for testing.
  // for (var key in queryParameters) {
  //   query.equalTo(key, queryParameters[key]);
  // }
  query.find().then(function(results) {
    tool.l('Successfully retrieved ' + results.length + ' posts.');
    // 处理返回的结果数据
    // Extract user contact information.
    var providerList = [];
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      var associatedUser = object.get('user');
      var fetchedProvider = {};
      fetchedProvider.name = object.get('nickname');
      // TODO: return all the contact information here.
      fetchedProvider.contactname = object.get('contactname');
      fetchedProvider.qqnumber = object.get('qqnumber'); 
      providerList.push(fetchedProvider);
    }
    tool.l(fetchedProvider)
    res.send(providerList);
  }, function(error) {
    tool.l('Error: ' + error.code + ' ' + error.message);
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
      }, function(err) {
      });
      // TODO: Fix the http response logic. 
      // set http code accordingly.
      // This is too fragile and not acceptable.
    });
  }
  res.send();
};

module.exports = provider;
