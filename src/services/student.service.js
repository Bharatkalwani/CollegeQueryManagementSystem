const loginS = require("../models/user");
const Hostel = require("../models/hostel");
const College = require("../models/college");
passport = require("passport");
const md5 = require("md5");
const { sendEmail, generateToken ,isAuth} = require("../helper/helper")
var StudentService = function (use) {

};

StudentService.GetHostelComplains = async function (req, res) {
    Hostel.find({}, function (err, hostels) {
        posts = hostels;
        res.render("hostelComplain", { posts: posts });
    });
}

StudentService.GetCollegeComplains = async function (req, res) {
    College.find({}, function (err, colleges) {
        posts = colleges;
        res.render("collegeStd", {
            posts: posts });
    });
}

StudentService.MyHostelComplains = async function (req, res) {
    const email = req.user.email
    Hostel.find({ email: email }, function (err, hostels) {
        posts = hostels;
        res.render("myHostel", { posts: posts});
    });
}

StudentService.ComposeHostel = async function (req, res) {
    const email = req.user.email
    const hostel = new Hostel({
        email: email,
        name: req.body.postName,
        hostel_no: req.body.postHostel,
        room_no: req.body.postRoom,
        content: req.body.postContent,
        year: req.body.year,
        replyHostel: []
    });
    hostel.save();
    res.redirect('/hostelComplain');
}

StudentService.MyCollegeComplains = async function (req, res) {
    const email = req.user.email
    College.find({ email: email }, function (err, colleges) {
        posts = colleges;
        res.render("myCollege", { posts: posts });
    });
}

StudentService.ComposeCollege = async function (req, res) {
    const email = req.user.email
    const college = new College({
        email: email,
        name: req.body.postName,
        title: req.body.postTitle,
        content: req.body.postContent,
        teacher: req.body.teacher,
        branch: req.body.branch,
        section: req.body.section,
        year: req.body.year,
        reply: []
    });
    college.save();
    res.redirect('/collegeStd');
}

module.exports = StudentService;
