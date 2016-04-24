'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
var product = {};

product.add = (req, res) => {
  tool.l('product.add');
  var user = req.user;
  var body = req.body;
  var productAV = AV.Object.new('Product');
  tool.l(body);
  tool.l("user:" + user);
  // TODO: Maybe we should use a for loop.
  productAV.set('productname', body.productname);
  productAV.set('start', body.start);
  productAV.set('destination', body.destination);
  productAV.set('user', body.user);
  productAV.set('phone', body.phone);
  productAV.set('people', body.people);
  productAV.set('saleprice', parseInt(body.saleprice));
  productAV.set('competitorprice', parseInt(body.competitorprice));
  productAV.set('costprice', parseInt(body.costprice));
  productAV.set('signinpeople', 0);
  // We store them as string because storing them in database might have
  // performance drawbacks.
  productAV.set("providers", body.providers) 
  productAV.set("itinerary", body.itinerary) 
  productAV.save().then(function() {
      tool.l("success");
      res.redirect('/admin/add-proivder');  
    }, function(error) {
    // 失败
      res.send({
        message: error.message,
        code: error.code,
      });
    });
}; 

product.getAll = (req, res) => {
  tool.l('product.getAll');
  var query = new AV.Query('Product');
  query.select("productname", "username", "phone", "start", "destination", "people");
  query.find().then(function(results) {
    console.log('Successfully retrieved ' + results.length + ' posts.');
    // 处理返回的结果数据
    var products = [];
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
    }
    console.log(results);
    res.send(results);
    }, function(error) {
      console.log('Error: ' + error.code + ' ' + error.message);
    });
};

product.get = (req, res) => {
  tool.l('product.get');
  var product = AV.Object.new('Product');
  product.id = req.body.id;
  var query = new AV.Query('Product');
  var result = {};
  query.equalTo('objectId', req.body.id);  
   query.find().then(function(results) {
     if (results.length == 1) {
       res.send(results[0]);
     } else {
       res.send();
     }
     // 处理返回的结果数据
    }, function(error) {
    console.log(error);
    });  
};

product.search = (req, res) => {
  tool.l('product.search');
  var query = new AV.Query('Product');
  var params = JSON.parse(req.body.query);
  tool.l(params);
  // Set keyword.
  query.contains("destination", params.keyword);
  // Set price.
  query.lessThan("saleprice", params.priceMax);
  query.greaterThan("saleprice", params.priceMin);
  // TODO: add start date.
  // TODO: add days.
  query.find().then(function(results) {
    tool.l(results);
    res.send(results);
  }, function(error) {
    // TODO: handle error.
    tool.l(error);
  });
};

// Add a user to the product.
product.signin = (req, res) => {
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

module.exports = product;
