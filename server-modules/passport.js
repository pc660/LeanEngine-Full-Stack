var localStrategy   = require('passport-local').Strategy;
const AV = require('leanengine');
var globals = require('./global');
const tool = require('./tool');
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
      tool.l("serizing");
      globals.usersMap[user.id] = user;
      done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
      tool.l("desserling");
      return done(null, globals.usersMap[id]);
    });
  
  passport.use("login", new localStrategy(
  function(username, password, cb) {
    console.log("running passport");
    AV.User.logIn(username, password).then(function(user) {
      return cb(null, user);
    }, function() {
      // 失败了
      return cb(null, false);
    }); 
  }));
}
