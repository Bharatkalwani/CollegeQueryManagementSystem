var teacherService = require("../services/teacher.service");

var TeacherCtrl = function (use) {
};

TeacherCtrl.getTeacherComplains = async function (req, res) {
    teacherService.GetTeacherComplains(req, res)
};

TeacherCtrl.composeTeacher = async function (req, res) {
    teacherService.ComposeTeacher(req, res)
};

TeacherCtrl.suggestionTeacher = async function (req, res) {
    teacherService.SuggestionTeacher(req, res)
};


TeacherCtrl.getStudentComplain = async function (req, res) {
    teacherService.GetStudentComplain(req, res)
};

TeacherCtrl.collegeFeedback = async function (req, res) {
    teacherService.CollegeFeedback(req, res)
};

TeacherCtrl.postFeedback = async function (req, res) {
    teacherService.PostFeedback(req, res)
};

module.exports = TeacherCtrl;
