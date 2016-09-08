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
    var log = AV.Object.new("AccessLog");
    log.set("operation", "orderApi.get");
    log.set("data", {id: req.body.id});
    log.set("user", req.user);
    log.save();
    if (!req.body.id) {
        res.send(404);
        return;
    }
    var order = AV.Object.createWithoutData('Order', req.body.id);
    order.fetch({ include: "product.platformcontact"}, null).then(function(result) {
        var product = {};
        product.fullName = result.get("product").get("fullName");
        product.prefix = result.get("product").get("prefix");
        res.send({order: result, product: product, platformcontact: result.get("product").get("platformcontact")});
        return;
    }, function(error) {
        tool.l(error);
    })
};


orderApi.getAll = (req, res) => {
    tool.l("orderApi.getAll");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "orderApi.getAll");
    log.set("data", {status: req.body.status});
    log.set("user", req.user);
    log.save();
    var user = req.user;
    if (!user) {
        tool.e("user undefined when orderApi.getAll");
        res.send(404);
        return;
    }
    var level = user.get("level");
    var index= req.body.index;
    if (!index) {
        index = 0;
    }

    var query = new AV.Query('Order');
    query.limit(config.items_per_page);
    query.skip(index * config.items_per_page);
    query.include("product.fullName", "product.prefix", "provider.provider");
    if (req.body.status) {
        query.equalTo("status", parseInt(req.body.status));
    }
    //
    if (level == config.userLevel.SALE) {
        query.equalTo("createdBy", req.user);
    } else if (level == config.userLevel.ORGANIZER) {
        query.equalTo("responsible", req.user);
    } else if (level == config.userLevel.PROVIDER) {
        query.equalTo("provider", req.user.get("provider"));
    } else if (level != config.userLevel.ADMIN) {
        tool.e("undefined user level in order.getAll");
        res.status(404).send();
    }

    query.descending("createdAt");

    var promises = [query.find(), query.count()];
    Promise.all(promises).then(function(results) {
        var result = results[0];
        var count = results[1];
        var product = result.map(function(order) {
            return order.get("product");
        })
        var provider = result.map(function(order) {
            return order.get("provider");
        })
        tool.l(count);
        res.send({order: result, product: product, provider: provider, count: count});
        return;
    });
}

orderApi.update = (req, res) => {
    tool.l("order.update");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "orderApi.update");
    log.set("data", {id: req.body.id, status: req.body.status});
    log.set("user", req.user);
    log.save();
    var order = AV.Object.createWithoutData('Order', req.body.id);
    var paid = false;
    if (req.body.status) {
        order.set("status", req.body.status);
        paid = (req.body.status == config.orderStatus.PAID);
    }
    if (req.body.customers) {
        order.set("customers", req.body.customers);
    }

    order.save().then(function(result) {
        if (paid) {
            order.fetch().then(function(result) {
                var product = result.get("product");
                product.fetch().then(function(productResult) {
                    var priceMap = productResult.get("price");
                    var price = orderApi.getPrice(priceMap, result.get("startDate"));
                    var totalNumber = result.get("adult") + result.get("child");
                    price.reservedPeopleNumber = price.reservedPeopleNumber - totalNumber;
                    price.paidPeopleNumber = price.paidPeopleNumber + totalNumber;
                    product.set("priceMap", priceMap);
                    product.save();
                })
            })
        }
        res.send(result);
    })
}

orderApi.getPrice = (priceMap, orderDate) => {
    var re = /([0-9]+)年([0-9]+)月([0-9]+)日/
    var parts = orderDate.match(re);
    if (parts.length !== 4) {
        tool.e("error! find malformat date" + order.date);
    }
    var year = parts[1];
    var month = parts[2];
    var day = parts[3];

    // Check year month day in priceMap.
    // Need to check rest
    if (priceMap[year] && priceMap[year][month - 1] && priceMap[year][month - 1][day]) {
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
    var log = AV.Object.new("AccessLog");
    log.set("operation", "orderApi.add");
    log.set("data", {order: req.body.order});
    log.set("user", req.user);
    log.save();
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
    orderAV.set("price", order.price);
    orderAV.set("createdBy", req.user);

    // TODO: Maybe we should store customer info. Now we just store an array.
    orderAV.set("customers", order.customers);
    var product = AV.Object.createWithoutData('Product', order.productId);
    orderAV.set("product", product);
    orderAV.set("status", config.orderStatus.UNPAID_UNVERIFIED);
    // Need to update the product storage.
    // Maybe we shouln't store all the data in the price.
    product.fetch().then(function(productResult) {
        var priceMap = productResult.get('price');
        var price = orderApi.getPrice(priceMap, order.date);
        if (!price) {
            tool.l("do not find the right price. date: " + order.date);
            res.send(404);
            return;
        }
        var totalNumber = order.adult + order.child;
        // cnanot reserve.
        if (price.restPeopleNumber < totalNumber) {
            tool.l("cannot reserve. date: " + order.date + " id: " + productResult.get("objectId"));
            res.send(404);
            return;
        }
        price.restPeopleNumber = price.restPeopleNumber - totalNumber;
        // Currently we assume all people paid.
        price.reservedPeopleNumber = price.reservedPeopleNumber + totalNumber;
        productResult.set("price", priceMap);
        var responsible = productResult.get("responsible");
        orderAV.set("responsible", responsible);
        orderAV.set("productCreator", productResult.get("createdBy"));
        orderAV.set("provider", productResult.get("provider"));
        productResult.save();

        orderAV.save().then(function(orderResult) {
            tool.l("successfully save order");
            res.send(orderResult);
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
            res.status(404).send(error);
        });
    }, function(error) {
        res.status(404).send(error);
    })
};

orderApi.revoke = (req, res) => {
    tool.l("order.revoke");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "orderApi.revoke");
    log.set("data", {id: req.body.id});
    log.set("user", req.user);
    log.save();
    var order = AV.Object.createWithoutData('Order', req.body.id);
    order.fetch({include: "product"}, null).then(function(result) {
        tool.l("getting results");
        var product = result.get("product");
        var responsible = product.get("responsible");
        order.set("status", config.orderStatus.REVOKE);
        tool.l(req.body.revoke);
        order.set("revoke", req.body.revoke);
        order.set("responsible", responsible);
        order.save().then(function() {
            tool.l("get");
            res.send();
        }, function(error) {
            tool.l(error);
        })
    });
};

orderApi.cancel = (req, res) => {
    tool.l("order.cancel");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "orderApi.cancel");
    log.set("data", {id: req.body.id});
    log.set("user", req.user);
    log.save();
    var order = AV.Object.createWithoutData('Order', req.body.id);
    order.fetch({include: "product"}, null).then(function(result) {
        // Have to update product.
        tool.l(result.get("product"));
        var product = result.get("product");
        var priceMap = product.get("price");
        var price = orderApi.getPrice(priceMap, result.get("startDate"));
        if (!price) {
            res.send(404);
            return;
        }
        var totalNumber = result.get("adult") + order.get("child");
        price.restPeopleNumber = price.restPeopleNumber + totalNumber;
        // Currently we assume all people paid.
        if (order.get("status") == config.orderStatus.UNPAID_UNVERIFIED
            || order.get("status") == config.orderStatus.UNPAID_VERIFIED
            || order.get("status") == config.orderStatus.CANCEL) {
            price.reservedPeopleNumber = price.reservedPeopleNumber - totalNumber;
        } else {
            price.paidPeopleNumber = price.paidPeopleNumber - totalNumber;
        }
        if (price.restPeopleNumber > price.totalPeopleNumber) {
            price.restPeopleNumber = price.totalPeopleNumbder;
            tool.l("sever error in order cancel, debug");
        }
        product.set("price", priceMap);
        product.save();
        order.set("status", config.orderStatus.CANCELLED);
        order.save().then(function(result) {
            res.send(result);
            return;
        });
    });
};

orderApi.getRevoke = (req, res) => {
    tool.l("get Revoke");
    var user = req.user;
    if (!user) {
        res.send(404);
        return;
    }

    var query = new AV.Query('Order');
    query.include("product.fullName", "product.prefix");
    query.equalTo("status", config.orderStatus.REVOKE);
    query.equalTo("responsible", user);
    query.find().then(function(results) {
        tool.l("find results " + results.length);
        var product = results.map(function(order) {
            return order.get("product");
        })
        res.send({order: results, product: product});
    }, function(error) {
        tool.l(error);
        res.send(error);
    })
};

orderApi.verify = (req, res) => {
    tool.l("order.verify");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "orderApi.verify");
    log.set("data", {id: req.body.id});
    log.set("user", req.user);
    log.save();
    var order = AV.Object.createWithoutData('Order', req.body.id);
    tool.l(req.body.status);
    order.set("status", parseInt(req.body.status));
    order.save().then(function(results) {
        res.send();
    }, function(error) {
        tool.l(error);
    })
};

// TODO: Revisit this.

orderApi.search = (req, res) => {
    tool.l("order.search");
    var query = new AV.Query('Customer');
    var params = req.body.query;
    if (params.orderId) {
        var id = params.orderId;
        var order = AV.Object.createWithoutData('Order', id);
        order.fetch().then(function(result) {
            tool.l(results);
            res.send([result]);
        })
        return;
    }
};

module.exports = orderApi;