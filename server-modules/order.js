'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const fs = require('fs');
const config = require('./config');
let orderApi = {};
var pdf = require('html-pdf');
var swig  = require('swig');

var LIMIT = 50;

orderApi.get = (req, res) => {
    tool.l("orderApi.get");
    // TODO Check current user?
    if (!req.body.id) {
        res.send(404);
        return;
    }
    var order = AV.Object.createWithoutData('Order', req.body.id);
    order.fetch().then(function(result) {
        res.send(result);
        return;
    })
};


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
    query.descending("createdAt");
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

orderApi.update = (req, res) => {
    var status = req.body.status;
    // TODO.
    switch (status) {
        case config.orderStatus.PAID:
            orderApi.orderGetPaid(req.body.orderId, res);
            break;
        default:
            break;
    }
}

orderApi.orderGetPaid = (orderId, res) => {
    var order = AV.Object.createWithoutData('Order', orderId);
    order.set("status", config.orderStatus.PAID);
    order.save().then(function(result) {
        res.send();
        // Need to update the price map.
        order.fetch().then(function(result) {
            var product = result.get("product");
            product.fetch().then(function(productResult) {
                var priceMap = productResult.get("price");
                var price = orderApi.getPrice(priceMap, result.get("startDate"));
                if (!price) {
                    res.send(404);
                    return;
                }
                var totalNumber = result.get("adult") + result.get("child");
                price.reservedPeopleNumber = price.reservedPeopleNumber - totalNumber;
                price.paidPeopleNumber = price.paidPeopleNumber + totalNumber;
                product.set("priceMap", priceMap);
                product.save();
            })
        })
    })
}

orderApi.getPrice = (priceMap, orderDate) => {
    var re = /([0-9]+)年([0-9]+)月([0-9]+)日/
    var parts = orderDate.match(re);
    if (parts.length !== 4) {
        tool.l("error! find malformat date" + order.date);
    }
    var year = parts[1];
    var month = parts[2];
    var day = parts[3];
    tool.l(priceMap);
    // Check year month day in priceMap.
    // Need to check rest
    tool.l(month);
    if (priceMap[year] && priceMap[year][month - 1] && priceMap[year][month - 1][day]) {
        tool.l("find the right date");
        var object = priceMap[year][month - 1][day];
        if (!object.restPeopleNumber > 0) {
            object.restPeopleNumber = object.totalPeople;
        }
        if (!object.paidPeopleNumber) {
            object.paidPeopleNumber = 0;
        }
        if (!object.reservedPeopleNumber) {
            object.reservedPeopleNumber = 0;
        }
        return object;
    }
    return null;
}

orderApi.add = (req, res) => {
    tool.l("orderApi.add");
    var order = req.body.order;
    //var customers = req.body.customers;
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
    orderAV.set("customers", order.customers);
    var product = AV.Object.createWithoutData('Product', order.productId);
    orderAV.set("product", product);
    orderAV.set("status", config.orderStatus.UNPAID);
    // Need to update the product storage.
    // Maybe we shouln't store all the data in the price.
    product.fetch().then(function(productResult) {
        var priceMap = productResult.get('price');
        var price = orderApi.getPrice(priceMap, order.date);
        if (!price) {
            res.send(404);
            return;
        }
        var totalNumber = order.adult + order.child;
        price.restPeopleNumbner = price.restPeopleNumbner - totalNumber;
        // Currently we assume all people paid.
        price.reservedPeopleNumber = price.reservedPeopleNumber + totalNumber;

        productResult.set("price", priceMap);
        productResult.save();

        orderAV.save().then(function(orderResult) {
            tool.l("successfully save order");
            res.send(orderResult);
            tool.l(order);
            // TODO: Maybe set another parameters.
            // TODO: Hacky!
            order.adultTotalPrice = order.adult * order.adultCompanySalePrice;
            order.childTotalPrice = order.child * order.childCompanySalePrice;
            swig.setDefaults({autoescape: false});
            var file = swig.renderFile('server-modules/static/order_confirm.html', {
                order: order,
                productName: productResult.get("fullName"),
                orderId: orderResult.id,

            });

            var objectId = orderResult.id;
            var options = { format: 'Letter'};
            pdf.create(file, options).toBuffer(function(err, buffer) {
                var filename = objectId + "_确认单" + ".pdf";
                var file = new AV.File(filename, buffer);
                orderAV.set("confirmFile", file);
                orderAV.save().then(function() {
                    tool.l("save success");
                }, function(error) {
                    tool.l("error");
                })
            });
            return;
        }, function(error) {
            tool.l(error);
        });
    }, function(error) {
        tool.l(error);
    })
};

orderApi.cancel = (req, res) => {
    var order = AV.Object.createWithoutData('Order', req.body.id);
    order.fetch({include: "product"}, null).then(function(result) {
        // Have to update product.
        var product = result.get("product");
        var priceMap = product.get("price");
        var price = orderApi.getPrice(priceMap, result.get("startDate"));
        if (!price) {
            res.send(404);
            return;
        }
        tool.l(price);
        var totalNumber = result.get("adult") + order.get("child");
        tool.l(totalNumber);
        price.restPeopleNumber = price.restPeopleNumber + totalNumber;
        // Currently we assume all people paid.
        if (order.get("status") == config.orderStatus.UNPAID) {
            price.reservedPeopleNumber = price.reservedPeopleNumber - totalNumber;
        } else {
            price.paidPeopleNumber = price.paidPeopleNumber - totalNumber;
        }
        if (price.restPeopleNumber > price.totalPeopleNumber) {
            price.restPeopleNumber = price.totalPeopleNumbder;
            tool.l("sever error in order cancel, debug");
        }
        product.set("price", priceMap);
        tool.l(priceMap);
        tool.l(price);

        product.save();
        order.destroy().then(function() {
            res.send();
            return;
        });
    });
};

module.exports = orderApi;