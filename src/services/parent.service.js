const Parent = require("../models/parent");
var ParentService = function (use) {

};


ParentService.GetParentComplains = async function (req, res) {
  const email = req.user.email;
  Parent.find({ email: email }, function (err, parents) {  
      posts = parents;
      res.render("homeParent", {posts: posts });
  });
}

ParentService.CreateComplains = async function (req, res) {
  const parent = new Parent({
    email: req.user.email,
    name: req.user.name,
    title: req.body.postTitle,
    content: req.body.postContent,
    mobile: req.body.mobile,
    replyParent: []
  });
  parent.save();
  res.redirect('/getParentComplains');
}

module.exports = ParentService;