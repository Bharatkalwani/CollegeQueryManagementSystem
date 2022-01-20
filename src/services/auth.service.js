const User = require("../models/user");
const Hostel = require("../models/hostel");
const Teacher = require("../models/teacherComplain");
const Parent = require("../models/parent");
passport = require("passport");
const md5 = require("md5");
const { sendEmail, generateToken ,isAuth} = require("../helper/helper")
var UserService = function (use) {

};

UserService.RegisterUser = async function (req, res) {
   const email = req.body.username;
    const password = req.body.password;
    const checkEmail = await User.findOne({ email: email })
   
    if (checkEmail) {
        res.render('register', { error: true, msg: 'User Email Already Exists' })
    }
    else {
        const newUser = new User({
            name:req.body.name,
            email: req.body.username,
            password: md5(password),
            token: "",
            role:req.body.role
        });
        newUser.save(function (err) {
            if (err) {
                res.render('register', { error: true, msg: 'Something went wrong User not saved' })
            } else {
                
                const message = {
                    email: newUser.email,
                    subject: 'Git Login Credentials For Complain Portal',
                    html: '<p>Hello User please check the Email and Password for College Management System  portal.`</p><p>Email id - </p>' + newUser.email + '<p>Password </p>' + password + '<p>Please change you password as soon as possible</p><h2>THANK YOU</h2>'
                }
                const sendMail = sendEmail(message);
                res.render("registered");
            }
        });
    }
};

// UserService.LoginStudent = async function (req, res) {
//     console.log("login enters")
//     const posts = [];
//     const user = req.body.username;
//     const pass = md5(req.body.password);

//     User.findOne({ email: user }, (err, userData) => {
//         if (userData == null) {
//             res.render('loginStd', { msg: 'Email Does Not Match', error: true });
//         } else {
//             if (userData !== null && userData.password === pass) {
//                 if (userData.status == 0)
//                     res.render("updatePasswordStd", { error: false, msg: '', email: userData.email });
//                 else {
//                     //req.session.isAuth=true;
//                     //req.session.userid=user;
//                     Hostel.find({}, function (err, students) {
//                         posts = students
//                         res.render("homeStd", { posts: posts, email: userData.email });
//                     });
//                 }
//             } else
//                 res.render('loginStd', { msg: ' Password Does Not Match', error: true });
//         }
//     })
// }

UserService.UpdatePassword = async function (req, res) {
    const email = req.user.email
    const new_pass = md5(req.body.new_password);
    const confirm_pass = md5(req.body.confirm_password);
    if (new_pass === confirm_pass) {
        User.findOneAndUpdate({ email: email }, { password: confirm_pass, status: 1 }, { new: true }, (err, result) => {
            if (err)
                res.render('updatePassword', { msg: 'Something Went Wrong', error: true, email: email });
            else {
                if(req.user.role=='student'){
                    Hostel.find({}, function (err, students) {
                        posts = students;
                        res.render("hostelComplain", { posts: posts });
                    });
                }
                else if(req.user.role=='teacher'){
                    Teacher.find({}, function (err, teachers) {   
                        posts = teachers;
                        res.render("homeTch", { posts: posts, name: userData.teacher_name});
                      });
                }
                else if(req.user.role=='management'){
                    Parent.find({},function(err,parents){   
                        posts=parents;
                      res.render("management",{ posts:posts  });
                      });
                }
                else if(req.user.role=='parent'){
                    Parent.find({ email: email }, function (err, parents) {  
                        posts = parents;
                        res.render("homeParent", {posts: posts });
                      
                    });
                }
                
            }
        });
    }
    else {
        res.render('updatePassword', { msg: ' Password Does Not Match', error: true, email: email });
    }
}

UserService.ForgetEmail = async function (req, res) {
    const email = req.body.username;
    User.findOne({ email: email }, async (err, userData) => {
        if (userData == null) {
            res.render('forgetEmail', { msg: 'Email Does Not Exists', error: true });
        } else {
            const token = await generateToken();
            console.log("token",token)
            User.findOneAndUpdate({ email: email }, { token: token }, { new: true }, (err, result) => {
                if (result == null) {
                    res.render('forgetEmail', { msg: 'Something Went Wrong  ', error: true });
                }
                else {
                    const message = {
                        email: email,
                        subject: 'Reset Password Token',
                        html: '<p>Hello student here is token number for reset password .</p>' + result.token + '<h2>THANK YOU</h2>'
                    }
                    const sendMail = sendEmail(message);
                    res.render("forgetPassword", { msg: 'Token  is sent to your email box.', error: true });
                }
            });
        }
    })
}

UserService.ForgetPassword = async function (req, res) {
    const data = req.body
    const new_pass = md5(req.body.new_password);
    const confirm_pass = md5(req.body.confirm_password);
    User.findOne({ token: data.token }, (err, userData) => {
        if (userData == null) {
            res.render('forgetPassword', { msg: 'Please Enter the valid token sent in your email id', error: true });
        }
        else {
            if (new_pass === confirm_pass) {
                User.findOneAndUpdate({ token: userData.token }, { password: confirm_pass, token: "" }, { new: true }, (err, result) => {
                    if (err)
                        res.render('forgetPassword', { msg: 'Something went Wrong', error: true });
                    else
                        res.render("login", { error: true, msg: 'Password Successfully Changed' });
                });
            }
            else
                res.render('forgetPassword', { msg: ' Password Does Not Match', error: true });
        }
    });
}
module.exports = UserService;