const express = require("express");
const app = express.Router();
const teacherCtrl = require("../controller/teacher.controller");
const { checkAuthenticated } = require("../helper/helper");

app.get("/getTeacherComplains",checkAuthenticated, function (req, res) {
    teacherCtrl.getTeacherComplains(req, res)
});

app.get("/composeTch", checkAuthenticated,function (req, res) {
    res.render("composeTch");
})

app.post("/composeTch",checkAuthenticated, function (req, res) {
    teacherCtrl.composeTeacher(req, res)
});

app.get("/showStdComplain",checkAuthenticated, function (req, res) {
    teacherCtrl.getStudentComplain(req, res)
});

app.get("/suggestionTch",checkAuthenticated, function (req, res) {
    teacherCtrl.suggestionTeacher(req, res)
});

app.post("/feedback/:id",checkAuthenticated, async function (req, res) {
    teacherCtrl.postFeedback(req, res)
});

app.get("/feedback/:id",checkAuthenticated, async (req, res) => {
    teacherCtrl.collegeFeedback(req, res)
});

module.exports = app;