const express = require("express");
const app = express.Router();
const studentCtrl = require("../controller/student.controller");
const { checkAuthenticated } = require("../helper/helper");
passport = require("passport");


app.get("/hostelComplain",checkAuthenticated, function (req, res) {
  studentCtrl.getHostelComplains(req, res);
});

app.get("/collegeStd",checkAuthenticated, function (req, res) {
  studentCtrl.getCollegeComplains(req, res);
});


app.get("/composeStd",checkAuthenticated, function (req, res) {
  res.render("composeStd");
});

app.post("/composeStd",checkAuthenticated, function (req, res) {
  studentCtrl.composeHostel(req, res);
});

app.get("/composeClg",checkAuthenticated, function (req, res) {
  res.render("composeClg");
});

app.post("/composeClg",checkAuthenticated, function (req, res) {
  studentCtrl.composeCollege(req, res);
});

app.get("/myHostel",checkAuthenticated, function (req, res) {
  studentCtrl.myHostelComplains(req, res);
});

app.get("/myCollege",checkAuthenticated, function (req, res) {
  studentCtrl.myCollegeComplains(req, res);
});

module.exports = app;
