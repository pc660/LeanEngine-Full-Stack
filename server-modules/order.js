'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
const config = require('./config');
let orderApi = {};

var LIMIT = 50;


orderApi.getAll = (req, res) => {
    tool.l("orderApi.getAll");
    var user = req.user;
    // TODO: Uncomment this.
    if (!user) {
        //res.send(404);
        //return;
    }

    var query = new AV.Query('Order');
    query.include("product.fullName", "product.prefix");
    if (req.body.status) {
        query.equalTo("status", parseInt(req.body.status));
    }
    query.find().then(function(results) {
        tool.l("successfully get " + results.length + " results");
        tool.l(results);
        var product = results.map(function(order) {
            return order.get("product");
        })
        res.send({order: results, product: product});
        return;
    })
}

orderApi.add = (req, res) => {
    tool.l("orderApi.add");
    var order = req.body.order;
    var customers = req.body.customers;
    var orderAV = AV.Object.new('Order');
    orderAV.set("adult", order.adult);
    orderAV.set("child", order.child);
    orderAV.set("adultPrice", order.adultCompanySalePrice);
    orderAV.set("childPrice", order.childCompanySalePrice);
    orderAV.set("startDate", order.date);
    orderAV.set("totalPrice", order.totalPrice);
    orderAV.set("contactname", order.contactname);
    orderAV.set("cellphone", order.cellphone);
    orderAV.set("email", order.email);

    // TODO: Maybe we should store customer info. Now we just store an array.
    orderAV.set("customers", customers);
    var product = AV.Object.createWithoutData('Product', order.productId);
    orderAV.set("product", product);
    orderAV.set("status", config.orderStatus.UNPAID);
    // Need to update the product storage.
    // Maybe we shouln't store all the data in the price.
    product.fetch().then(function(result) {
        var priceMap = result.get('price');
        // Get the exact storeage from the map.
        var re = /([0-9]+)年([0-9]+)月([0-9]+)日/
        var parts = order.date.match(re);
        if (parts.length !== 4) {
            tool.l("error! find malformat date" + order.date);
        }
        var year = parts[1];
        var month = parts[2];
        var day = parts[3];
        // Check year month day in priceMap.
        // Need to check rest
        if (priceMap[year] && priceMap[year][month - 1] && priceMap[year][month - 1][day - 1]) {
            var object = priceMap[year][month][day - 1];
            if (!object.restPeopleNumbner > 0) {
                object.restPeopleNumbner = object.totalPeople;
            }
            if (!object.paidPeopleNumber) {
                object.paidPeopleNumber = 0;
            }
            var totalNumber = order.adult + order.child;
            if (totalNumber > object.restPeopleNumbner) {
                // Failed
                res.send(404);
                return;
            }
            object.restPeopleNumbner = object.restPeopleNumbner - totalNumber;
            // Currently we assume all people paid.
            // TODO:
            object.paidPeopleNumber = object.paidPeopleNumber + totalNumber;
            tool.l(priceMap[year][month][day - 1])
        }
        result.set("price", priceMap);

        result.save();
        orderAV.save().then(function(results) {
            tool.l("successfully save order");
            res.send();
            return;
        }, function(error) {
            tool.l(error);
        });
    }, function(error) {
        tool.l(error);
    })
};

module.exports = orderApi;
/*

{type: "number", name: 'totalPeople', value: '入库数'},
{type: "number", name: 'minimumPeople', value: '最低成团人数'},
{type: "number", name: 'reservedPeopleNumber', value: '占位数'},
{type: "number", name: 'paidPeopleNumber', value: '签约数'},
{type: "number", name: 'restPeopleNumbner', value: '余位'},*/