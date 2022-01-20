const express = require("express");
const app = express.Router();
var adminCtrl = require("../controller/admin.controller");

app.get("/admin", function (req, res) {
    res.render("admin");
});

app.post("/registerAdmin", function (req, res) {
    adminCtrl.registerAdmin(req, res)
});


app.get("/registerAdmin", function (req, res) {
    res.render("registerAdmin");
});


app.post("/loginAdmin", function (req, res) {
    adminCtrl.loginAdmin(req, res)
});

app.get("/loginAdmin", function (req, res) {
    res.render("loginAdmin", { error: false, msg: '' });
});


module.exports = app;