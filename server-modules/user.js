'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const config = require('./config');
let userApi = {};

const INTERNAL = 0;
const PROVIDER_LEVLE = 1;

// {"all"}
function getPromises(promiseMap) {
    var promises = [];
    var keys = [];
    for (var key in promiseMap) {
        promises.push(promiseMap[key]);
        keys.push(key);
    }
    return [promises, keys];
};

userApi.get = (req, res) => {
    tool.l("userApi.get");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "userApi.get");
    log.set("data", {query: req.body.query});
    log.set("user", req.user);
    log.save();

    var query = new AV.Query('_User');
    tool.l(req.body.query);
    var levelList = req.body.query.level;
    query.select(["contactname", "objectId"])
    for (var i = 0; i < levelList.length; i++) {
        query.equalTo('level', levelList[i]);
    }
    query.find().then(function(employeeList) {
        if (!req.body.include) {
            res.send(employeeList);
            return;
        }
        var countResults = {};
        var totalCount = employeeList.length;

        employeeList.forEach(function(employee) {
            countResults[employee.id] = {};
            var include = req.body.include;
            var count = include.length;
            include.forEach(function(item) {
                var includeMap = parseInclude(item, employee, req.body.query);
                for (var includeKey in includeMap) {
                    var promiseAndKey = getPromises(includeMap[includeKey]);
                    Promise.all(promiseAndKey[0]).then(function(promiseResults) {
                        countResults[employee.id][includeKey] = {};
                        promiseResults.forEach(function(promiseResult, i) {
                            countResults[employee.id][includeKey][promiseAndKey[1][i]] = promiseResult;
                        });
                        if (Object.keys(countResults[employee.id]).length == count) {
                            totalCount--;
                        }
                        if (totalCount == 0) {
                            res.send({employeeList: employeeList, employeeMap: countResults});
                            return;
                        }

                    }, function(error) {
                        tool.l(error);
                    });
                }
            });
        });

    }, function(error) {
        tool.e(error);
    });
}

function parseInclude(item, user, queryOptions) {
    var returnMap = {};
    if (item) {
        switch(item) {
            case "product":
                returnMap.product = getUserProductPromise(user, queryOptions);
                break;
            case "provider":
                returnMap.provider = getProviderQuery(user, queryOptions);
                break;
            case "order":
                returnMap.order = getOrderQuery(user, queryOptions);
                break;
        }
    }
    return returnMap;
}

// Only return the status and count.
function getUserProductPromise(user, queryOptions) {
    var returnMap = {};
    for (var key in config.productStatus) {
        returnMap[config.productStatus[key]] = productCountQuery(config.productStatus[key], user, queryOptions);
    }
    return returnMap;
}

function setQueryOption(queryOptions, query) {
    if (queryOptions.startDate) {
        var date = tool.parseDate(queryOptions.startDate);
        query.greaterThan("createdAt", date);
    }
    if (queryOptions.endDate) {
        var date = tool.parseDate(queryOptions.endDate);
        date.setDate(date.getDate() + 1);
        query.lessThan("createdAt", date);
    }
}

function getProviderQuery(user, queryOptions) {
    var returnMap = {};
    var query = new AV.Query('Provider');
    query.equalTo("createdBy", user);
    setQueryOption(queryOptions, query);
    returnMap.all = query.count();
    return returnMap;
}

function productCountQuery(status, user, queryOptions) {
    var query = new AV.Query('Product');
    query.equalTo("createdBy", user);
    query.equalTo("status", status);
    setQueryOption(queryOptions, query);
    return query.count();
}

function orderCountQuery(status, user, queryOptions) {
    var query = new AV.Query('Order');
    query.equalTo("productCreator", user);
    query.equalTo("status", status);
    setQueryOption(queryOptions, query);
    return query.count();
}

function getOrderQuery(user, queryOptions) {
    var returnMap = {};
    returnMap[config.orderStatus.FINISHED] = orderCountQuery(config.orderStatus.FINISHED, user, queryOptions);
    returnMap[config.orderStatus.CANCELLED] = orderCountQuery(config.orderStatus.CANCELLED, user, queryOptions);
    return returnMap;
}

userApi.getCurrentUserInfo = (req, res) => {
    var user = userApi.getCurrentUser(req);
    if (user) {
        res.send(user)
    } else {
        res.status(202).send();
    }
}

userApi.addContactList = (req, res) => {
    tool.l("userApi.addContactList");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "userApi.addContactList");
    log.set("data", {contact: req.body.contact});
    log.set("user", req.user);
    log.save();
    var contact = req.body.contact;
    var contactAV = AV.Object.new('Contact');
    userApi.setContact(contactAV, contact);
    var provider = AV.Object.createWithoutData("Provider", contact.providerId);
    contactAV.set("provider", provider);
    contactAV.save().then(function(contact) {
        tool.l("success")
        res.send(contact);
    }, function(error) {
        tool.l(error)
       res.status(404).send();
    });
}

userApi.setContact = (contactAV, contact) => {
    contactAV.set("contactname", contact.contactname);
    contactAV.set("cellphone", contact.cellphone);
    contactAV.set("homephone", contact.homephone);
    contactAV.set("position", contact.position);
    contactAV.set("qqnumber", contact.qqnumber);
    contactAV.set("wechat", contact.wechat);
}

userApi.editContactList = (req, res) => {
    tool.l("userApi.editContactList");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "userApi.editContactList");
    log.set("data", {contact: req.body.contact});
    log.set("user", req.user);
    log.save();
    var contact = req.body.contact;
    var contactAV = AV.Object.createWithoutData("Contact", contact.objectId);
    userApi.setContact(contactAV, contact);
    contactAV.save().then(function(contact) {
        tool.l("success")
        res.send();
    }, function(error) {
        tool.e(error)
        res.status(404).send(error);
    });
}

userApi.getContactList = (req, res) => {
    tool.l("userApi.getContactList");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "userApi.getContactList");
    log.set("data", {id: req.body.providerId});
    log.set("user", req.user);
    log.save();
    var providerId = req.body.providerId;
    var query = new AV.Query("Contact");
    var provider = AV.Object.createWithoutData("Provider", providerId);
    query.equalTo("provider", provider);
    query.find().then(function(results) {
        res.send(results);
    }, function(error) {
        tool.l(error);
    });
}

userApi.deleteContactList = (req, res) => {
    tool.l("userApi.deleteContactList");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "userApi.deleteContactList");
    log.set("data", {contactId: req.body.contactId});
    log.set("user", req.user);
    log.save();
    var contactId = req.body.contactId;
    var contact = AV.Object.createWithoutData("Contact", contactId);
    contact.destroy().then(function(success) {
        tool.l("success");
        res.send();
    })
}

userApi.getCurrentUser = (req) => {
    var user = req.user;
    if (user && user.isCurrent()) {
        return user
    }
    return null;
}

userApi.getProvider = (req, res) => {
    tool.l("userapi.getProvider");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "userApi.getProvider");
    log.set("user", req.user);
    log.save();
    var user = userApi.getCurrentUser(req);
    tool.l(user);
    if (!user) {
        res.send(202);
        return;
    }

    var provider = user.get("provider");
    provider.fetch().then(function(result) {
        var query = new AV.Query('Contact');
        query.equalTo("provider", result);
        query.find().then(function(contactList) {
            res.send({ "provider": result, "contacts": contactList});
        })
        return;
    })

}

userApi.update = (req, res) => {
    tool.l("userapi.update");
    var log = AV.Object.new("AccessLog");
    log.set("operation", "userApi.update");
    log.set("user", req.user);
    log.save();
    var user = userApi.getCurrentUser(req);
    tool.l(user);
    if (!user) {
        res.send(202);
        return;
    }

    var data = req.body.user;
    user.set("cellphone", data.cellphone || "");
    user.set("email", data.email || "");
    user.set("contactname", data.contactname || "");
    user.save().then(function(result ) {
        res.send(result);
        return;
    });
};

module.exports = userApi;