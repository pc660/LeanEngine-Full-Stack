'use strict';

const AV = require('leanengine');
const tool = require('./tool');
var customer = {};

customer.search = (req, res) => {
  tool.l("customer.search");
  var params = JSON.parse(req.body.query);
  var query = new AV.Query('Customer');
  if (params.username) {
    query.equalTo("username", params.username);
  }
  if (params.identifier) {
    query.equalTo("identifier", params.identifier);
  }
  if (params.productId) {
    query.equalTo("productid", params.productId); 
  } 
  query.find().then(function(results) {
    res.send(results);
  }, function(error){
    // TODO: send error.
    res.status(404).send();
  });
};

module.exports = customer;
