var adminService = require("../services/admin.service");

var AdminCtrl = function (use) {
};

AdminCtrl.registerAdmin = async function (req, res) {
    adminService.RegisterAdmin(req, res)
};

AdminCtrl.loginAdmin = async function (req, res) {
    adminService.LoginAdmin(req, res)
};


module.exports = AdminCtrl;