'use strict';

var testApi = {};
const AV = require('leanengine');
const tool = require('./tool');

testApi.clear = (req, res) => {
    tool.l("testApi.clear");
    // Delete the user with username testing.
    var query = new AV.Query('_User');
    query.equalTo('contactname', 'testingname');
    query.find().then(function(results) {
       results.forEach(function(result) {
           result.destroy();
       })
    });
    res.send();
}

module.exports = testApi;
