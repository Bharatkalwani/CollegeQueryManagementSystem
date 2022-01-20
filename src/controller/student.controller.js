const studentService = require("../services/student.service");

var StudentCtrl = function (use) {
};


StudentCtrl.getHostelComplains = async function (req, res) {
    studentService.GetHostelComplains(req, res)
};

StudentCtrl.getCollegeComplains = async function (req, res) {
    studentService.GetCollegeComplains(req, res)
};

StudentCtrl.myHostelComplains = async function (req, res) {
    studentService.MyHostelComplains(req, res)
};

StudentCtrl.composeHostel = async function (req, res) {
    studentService.ComposeHostel(req, res)
};

StudentCtrl.composeCollege = async function (req, res) {
    studentService.ComposeCollege(req, res)
};

StudentCtrl.myCollegeComplains = async function (req, res) {
    studentService.MyCollegeComplains(req, res)
};
module.exports = StudentCtrl;
