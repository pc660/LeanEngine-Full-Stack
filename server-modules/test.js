'use strict';

var testApi = {};
const AV = require('leanengine');
const tool = require('./tool');

function updateProductValidateMap(product) {
    var validationMap = new AV.Object("ProductValidationMap");
    var resultId = product.id;
    // Find the last date of the price map.
    var maxDate = product.get("maxDate");
    if (maxDate) {
        var dateString = maxDate.getFullYear() + "_" + maxDate.getMonth() + "_" + maxDate.getDate();
        validationMap.set("date", dateString);
        validationMap.add("product", resultId);
        //validationMap.add(dateString, resultId);
    }
    validationMap.save().then(function(result) {
        tool.l("success");
    });
}

function updateDate(date) {
    var query = new AV.Query('ProductValidationMap');
    query.equalTo("date", date.toString());
    query.find().then(function(results) {
        if (results.length > 0) {
            var products = results[0].get("product");
            products.forEach(function(productId) {
                var productAV =  AV.Object.createWithoutData('Product', productId);
                productAV.fetch().then(function(result) {
                    var maxDate = result.get("maxDate");
                    if (maxDate.toString() == date.toString()) {
                        productAV.set("category", "过期");
                        productAV.save().then(function() {
                            tool.l("success");
                        });
                    }
                })
            })
        }
    })
}

testApi.clear = (req, res) => {
    var query = new AV.Query('Product');
    query.limit(1000);
    query.find().then(function(products) {
        tool.l(products.length);
        products.forEach(function(product) {
            var price = product.get("price");
            var currentDate = new Date();
            for (var year in price) {
                for (var month in price[year]) {
                    for (var day in price[year][month]) {
                        var date = new Date(year, month, day);
                        if (currentDate > date) {
                            delete price[year][month][day];
                        }
                    }
                }
            }
            tool.l(price);
            product.set("price", price);
            product.save();
        });
    })
    //var maxDate = product.get("maxDate");
    //var validationMap = new AV.Object("ProductValidationMap");
    /*var date = new Date(2016, 5, 1);
    var endDate = new Date(2016, 11, 18);
    var dateArray = [];
    while (date <= endDate) {
        dateArray.push(new Date(date.getTime()));
        date.setDate(date.getDate() + 1);
    }
    dateArray.forEach(function(date) {
        updateDate(date);
    })*/
}

module.exports = testApi;
