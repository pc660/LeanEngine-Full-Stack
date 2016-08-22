'use strict';

const AV = require('leanengine');
const tool = require('./tool');
const passport = require('passport');

let pub = {};

pub.authenticate = (req, res) => {
  tool.l('auth.authenticate');
  var username = req.params.username;
  var password = req.params.password;
  passport.authenticate('local');
};

pub.logout = (req, res) => {
  tool.l("pub.logout");
  // Clear cookie.
  res.clearCookie("user");
  req.logout();
  res.redirect("/login");
};

pub.test = (req, res) => {
  tool.l("testing this");
}

pub.register = (req, res) => {
  tool.l('auth.register');
  tool.l(req.body);
  var username = req.body.username;
  var password = req.body.password;
  var level = req.body.level;
  var email = req.body.email;
  var contactname = req.body.email;
  var cellphone = req.body.cellphone;
  var user = new AV.User();
  tool.l(req.body.password);
  user.set('username', username);
  user.set('password', password);
  user.set("level", level);
  user.setEmail(email);
  user.set("contactname", contactname);
  user.set("cellphone", cellphone);
  user.signUp().then(function(user) {
    tool.l('success')
    res.send({
      code: "200"
    });
    }, function(error) {
      tool.l('error')
      res.send(404);
    });
};

pub.changePass = (req, res) => {
  tool.l("auth.changePass");
  AV.User.requestPasswordReset(req.user.get("email")).then(function (success) {
    tool.l(success);
    res.send();
  }, function (error) {
    tool.l(error);
  });
};
module.exports = pub;
