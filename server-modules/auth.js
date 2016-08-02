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
  var user = new AV.User();
  tool.l(req.body.password);
  user.set('username', username);
  user.set('password', password);
  user.set("level", level);
  user.signUp().then(function(user) {
    tool.l('success')
    res.send({
      code: "200"
    });
    }, function(error) {
      tool.l('error')
      res.send({
        code: error.code,
        message: error.message      
      });
    });
}

module.exports = pub;
