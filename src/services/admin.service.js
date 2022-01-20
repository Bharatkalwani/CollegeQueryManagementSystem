const md5 = require("md5");
const nodemailer = require('nodemailer');
var loginAdmin = require("../models/admin");

var AdminService = function (use) {

};

AdminService.RegisterAdmin = async function (req, res) {
    const newUser=new loginAdmin({
        email:req.body.username,
        password:md5(req.body.password)
        
        });
        newUser.save(function(err){
        if(err)
        {
          console.log(err);
        }else{
          res.render("registered");
        }
          });
       
}

AdminService.LoginAdmin = async function (req, res) {
    const user=req.body.username;
    const pass=md5(req.body.password);
    loginAdmin.findOne({email: user}, (err, userData) => {
  
      if(err){   
          res.render('loginAdmin', {msg: 'Email Does Not Match', error: true});
      }else{
        if(userData !== null && userData.password === pass){
        //  res.render("admin");
        res.render("register", { error: false, msg: '' });
        }else{  
          res.render('loginAdmin', {msg: ' Password Does Not Match', error: true});
        }
      }
    })
}
module.exports = AdminService;