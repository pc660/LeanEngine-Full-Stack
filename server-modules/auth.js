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

pub.test = (req, res) => {
  tool.l("testing this");
}

pub.register = (req, res) => {
  tool.l('auth.register');
  var username = req.body.username;
  var password = req.body.password;
  var user = new AV.User();
  user.set('username', username);
  user.set('password', password);
  user.signUp().then(function(user) {
    tool.l('success')
    res.send({
      code: "200"
    });
    }, function(error) {
      tool.l('error')
      tool.l(error.code);
      res.send({
        code: error.code,
        message: error.message      
      });
    });
}

module.exports = pub;
