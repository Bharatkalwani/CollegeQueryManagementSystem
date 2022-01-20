const parentService = require("../services/parent.service");

var ParentCtrl = function (use) {
};

ParentCtrl.getParentComplains = async function (req, res) {
    parentService.GetParentComplains(req, res)
};

ParentCtrl.createComplains = async function (req, res) {
    parentService.CreateComplains(req, res)
};


module.exports = ParentCtrl;
