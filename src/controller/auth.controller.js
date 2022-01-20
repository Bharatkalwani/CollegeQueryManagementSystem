const userService = require("../services/auth.service");

var UserCtrl = function (use) {
};


UserCtrl.registerUser = async function (req, res) {
    userService.RegisterUser(req, res)
};

// UserCtrl.loginStudent = async function (req, res) {
//     userService.LoginStudent(req, res)
// };

UserCtrl.updatePassword = async function (req, res) {
    userService.UpdatePassword(req, res)
};

UserCtrl.forgetEmail = async function (req, res) {
    userService.ForgetEmail(req, res)
};

UserCtrl.forgetPassword = async function (req, res) {
    userService.ForgetPassword(req, res)
};

module.exports = UserCtrl;