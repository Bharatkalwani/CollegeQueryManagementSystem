const express = require("express");
const app = express.Router();
const { checkAuthenticated } = require("../helper/helper");
var parentCtrl = require("../controller/parent.controller");

app.get("/getParentComplains", checkAuthenticated,function (req, res) {
    parentCtrl.getParentComplains(req, res)
});

app.post("/composeParents",checkAuthenticated, function (req, res) {
    parentCtrl.createComplains(req, res)
});

app.get("/composeParents",checkAuthenticated, function (req, res) {
    res.render("composeParents");
});

module.exports = app;