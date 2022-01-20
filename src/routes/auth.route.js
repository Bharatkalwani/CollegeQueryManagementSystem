const express = require("express");
const app = express.Router();
const userCtrl = require("../controller/auth.controller");
const { checkAuthenticated } = require("../helper/helper");
passport = require("passport");

app.get("/home", function (req, res) {
  res.render("home");
});

app.post("/register", function (req, res) {
    userCtrl.registerUser(req, res);
  });
  
  app.get("/register", function (req, res) {
    res.render("register", { error: false, msg: "" });
  });
  
//   app.post("/login", passport.authenticate("local", {
//     //  console.log("data",req.user),
//       successRedirect: "/hostelComplain",
//       failureRedirect: "/login",
//      failureFlash:true
//   }),function (req, res) {});

app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
       if (err) {
          return next(err);
       }
       if (!user) {
          //return res.redirect('/login');
          return res.render('login',{ error: true, msg: "User Not Found Or Password Incorrect" })
       }
       req.logIn(user, function(err) {
          if (err) {
             return next(err);
          }
          if(user.status==0)
              return res.redirect('/updatePassword');

          else  if(user.role=='student')
              return res.redirect('/hostelComplain');

          else if(user.role=='teacher')
              return res.redirect('/getTeacherComplains');
 
          else if(user.role=='parent')
              return res.redirect('/getParentComplains');

          else if(user.role=='management')
              return res.redirect('/management');
           
       });
    })(req, res, next);
 });
  
  app.get("/login", function (req, res) {
    res.render("login", { error: false, msg: "" });
  });
  
  app.get("/updatePassword", function (req, res) {
    res.render("updatePassword", { error: false, msg: "" });
  });
  
  app.post("/UpdatePassword", function (req, res) {
    userCtrl.updatePassword(req, res);
  });
  
  app.post("/forgetEmail", function (req, res) {
    userCtrl.forgetEmail(req, res);
  });
  
  app.get("/forgetEmail", function (req, res) {
    res.render("forgetEmail", { error: false, msg: "" });
  });

  app.post("/forgetPassword", function (req, res) {
    userCtrl.forgetPassword(req, res);
  });
  
  app.get("/forgetPassword", function (req, res) {
    res.render("forgetPassword", { error: false, msg: "" });
  });
  
  app.get("/logout", function (req, res) {
    req.session.destroy((err) => {
      if (err) throw err;
      else {
      req.logout();
      res.redirect('/login')
      }
    });
  });
  
  
  module.exports = app;