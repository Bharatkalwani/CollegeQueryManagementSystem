const  LocalStrategy = require("passport-local").Strategy
const md5 = require("md5");
 passport = require("passport");
const User = require("../models/user");
function initialize(passport) {

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ email: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false,{message: "User not found"}); }
        if (user.password != md5(password)) 
          return done(null, false,{message: "Password Incorrect"}); 
        return done(null, user);
      });
    }
  ));
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
   
}

module.exports =initialize