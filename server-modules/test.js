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
        results.forEach(function(result) {
            var price = result.get("price");
            var minMax = getMinMaxDate(price);
            result.set("minDate", new Date(minMax[0]));
            result.set("maxDate", new Date(minMax[1]));
            result.save();
        });
    });
}

function getMinMaxDate(priceMap) {
    var dateList = []
    for (var year in priceMap) {
        for (var month in priceMap[year]) {
            for (var day in priceMap[year][month]) {
                var date = new Date(year, month, day);
                dateList.push(date);
            }
        }
    }
    tool.l(dateList);
    tool.l(Math.min.apply(null, dateList));
    return [Math.min.apply(null, dateList), Math.max.apply(null, dateList)];
}

module.exports = testApi;
