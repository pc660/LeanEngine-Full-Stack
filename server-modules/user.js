'use strict';

const AV = require('leanengine');
const tool = require('./tool');
let userApi = {};

const INTERNAL = 0;
const PROVIDER_LEVLE = 1;

userApi.get = (req, res) => {
    tool.l("userApi.get");
    var query = new AV.Query('_User');
    var level = req.body.query.level;
    query.select(["contactname", "objectId"])
    query.equalTo('level', level);
    query.find().then(function(results) {
        tool.l("get user success");
        tool.l(results.length);
        tool.l(results);
        res.send(results);
    }, function(error) {
        tool.l(error);
    });
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
    tool.l("userApi.addContactList")
    var contact = req.body.contact;
    var contactAV = AV.Object.new('Contact');
    userApi.setContact(contactAV, contact);
    var provider = AV.Object.createWithoutData("Provider", contact.providerId);
    contactAV.set("provider", provider);
    contactAV.save().then(function(contact) {
        tool.l("success")
        res.send();
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
    var contact = req.body.contact;
    tool.l(contact);
    var contactAV = AV.Object.createWithoutData("Contact", contact.objectId);
    userApi.setContact(contactAV, contact);
    contactAV.save().then(function(contact) {
        tool.l("success")
        res.send();
    }, function(error) {
        tool.l(error)
        res.status(404).send();
    });
}

userApi.getContactList = (req, res) => {
    tool.l("userApi.getContactList");
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
    tool.l("userApi.deleteContactList") ;
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
            tool.l(contactList);
            res.send({ "provider": result, "contacts": contactList});
        })
        return;
    })

}

module.exports = userApi;