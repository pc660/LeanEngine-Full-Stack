'use strict';

var testApi = {};
const AV = require('leanengine');
const tool = require('./tool');

testApi.clear = (req, res) => {
    /*tool.l("testApi.clear");
    // Delete the user with username testing.
    var query = new AV.Query('_User');
    query.equalTo('contactname', 'testingname');
    query.find().then(function(results) {
       results.forEach(function(result) {
           result.destroy();
       })
    });
    res.send();*/
    var query = new AV.Query('Product');
    query.limit(1000);
    query.find().then(function(results) {
        tool.l(results.length);
        results.forEach(function(result, i){
            result.set("category", "普通");
            result.save();
        });
    });
}


module.exports = testApi;
