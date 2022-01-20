var mngService = require("../services/management.service");

var MngCtrl = function (use) {
};

MngCtrl.getParentsComplains = async function (req, res) {
    mngService.GetParentsComplains(req, res)
};

MngCtrl.getSuggestions = async function (req, res) {
    mngService.GetSuggestions(req, res)
};

MngCtrl.getCollegeComplains = async function (req, res) {
    mngService.GetCollegeComplains(req, res)
};

MngCtrl.getHostelComplains = async function (req, res) {
    mngService.GetHostelComplains(req, res)
};

MngCtrl.getParentsComplains = async function (req, res) {
    mngService.GetParentsComplains(req, res)
};

MngCtrl.getHostelFeedback = async function (req, res) {
    mngService.GetHostelFeedback(req, res)
};

MngCtrl.postHostelFeedback = async function (req, res) {
    mngService.PostHostelFeedback(req, res)
};


MngCtrl.getParentFeedback = async function (req, res) {
    mngService.GetParentFeedback(req, res)
};


MngCtrl.postParentFeedback = async function (req, res) {
    mngService.PostParentFeedback(req, res)
};


module.exports = MngCtrl;
