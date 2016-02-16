'use strict';

const AV = require('leanengine');
const tool = require('./tool');

let provider = {};

provider.add = (req, res) => {
  tool.l('provider.add');
  // TODO: now we use a fake data to create a provider.
  // First we create a user for the provider.
  
  // TODO: maybe we can use a for loop?
  var user = new AV.User();
  user.set('username', req.params.username);
  user.set('password', req.params.password);
  user.set('contactname', req.params.contactname);
  user.set('sex', req.params.sex);
  user.set('homehone', req.params.homephone);
  user.set('fax', req.params.fax);
  user.set('cellphone', req.params.cellphone);
  user.set('qqnumber', req.params.qqnumber);
  user.set('wechat', req.params.wechat);
  
  user.signUp().then(function(user) {
    // Now add provider with this user. 
    provider.addProvider(req, res);
    console.log(user);
  }, function(error) {
    console.log('Error: ' + error.code + ' ' + error.message);
    res.send({
        code: error.code,
        message: error.message      
    });
  });
};

provider.addProvider = (req, res) => {
  var providerAV = AV.Object.new('Provider');
  providerAV.set('nickname', req.params.nickname);
  providerAV.set('compandyname', req.params.companyname);
  providerAV.set('businessScope', req.params.businessScope);
  providerAV.set('zipcode', req.params.zipcode);
  providerAV.set('foundTime', req.params.foundTime);
  providerAV.set('companySize', req.params.companySize);
  providerAV.set('capital', req.params.capital);
  providerAV.set('license', req.params.license);
  providerAV.set('licenseStart', req.params.licenseStart);
  providerAV.set('licenseEnd', req.params.licenseEnd);
  providerAV.set('taxnumber', req.params.taxnumber);
  providerAV.set('servingType', req.params.servingType);
  providerAV.set('mainBusiness', req.params.mainBusiness);
  providerAV.set('mainDestination', req.params.mainDestination);
  providerAV.set('contract', req.params.contract);
  providerAV.set('contractStart', req.params.contractStart);
  providerAV.set('contractEnd', req.params.contractEnd);
  providerAV.set('returnPolicyPeople', req.params.returnPolicyPeople);
  providerAV.set('returnPolicyPerPeople', req.params.returnPolicyPerPeople);
  providerAV.set('returnPolicyRevenue', req.params.returnPolicyRevenue);
  providerAV.set('returnPolicyMoney', req.params.returnPolicyMoney);
  tool.l(providerAV);
};
