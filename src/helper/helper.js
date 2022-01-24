
const nodemailer = require('nodemailer');//email sending

exports.sendEmail=async(data)=>{

    let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         user: 'bharat.softprodigy@gmail.com',
         pass: '3iuqNrdDq6gRTzvq'
    }
});

const message = {
    from: 'bharat.softprodigy@gmail.com', // Sender address
    to: data.email,         // List of recipients
    subject: data.subject,
    html:data.html
};

transport.sendMail(message, function (err) {
    if (err) {
        console.log("email error",err)
    } else {
        console.log("email sent");
    }

});

}

exports.generateToken=async()=>{
    var length = 6;
    var token = "";
    var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < length; i++)
        token += charset.charAt(Math.floor(Math.random() * charset.length));
     return token;
}


exports.isAuth=async(req,res,next)=>{
    console.log("function runs",req.session.isAuth)  
    if(req.session.isAuth){
        next();
    }
    else{
        res.redirect('/home')
      //  res.render("home");
    }    
}


exports.checkAuthenticated=async(req,res,next)=>{
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

// exports.checkNotAuthenticated=async(req,res,next)=>{
//       if (req.isAuthenticated()) {
//         //if(re.user.role=='student')
//         res.redirect("/home");
//       }
      
//       res.redirect("/home");
//   }
  