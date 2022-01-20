const express = require("express");
const session =require('express-session')
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const mongoDbSession =require('connect-mongodb-session')(session)
const initializePassport=require("../src/middleware/passport")
const DB = require("../src/config/db");
DB.connectDB();

const app = express();
initializePassport(passport)


const url="mongodb+srv://CMS:bk9828064545@cluster0.itloa.mongodb.net/CMS-Project?retryWrites=true&w=majority"
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src/public"));

app.use(flash())
app.use(cookieParser());

const store=new mongoDbSession({
    uri:url,
    collection:"mySessions"
})

const oneDay = 1000 * 60 * 60 * 24;
app.use(
    session ({ 
        secret:"key that will sign ",
        resave:false,
        saveUninitialized:false,
        store:store,
        cookie: { maxAge: oneDay}
    }))


app.use(passport.initialize());
app.use(passport.session());


app.get("/", function (req, res) {
    res.render("home");
});

//routes
app.use('/', require("./routes/student.route"))
app.use('/', require("./routes/teacher.route"))
app.use('/', require("./routes/parent.route"))
app.use('/', require("./routes/management.route"))
app.use('/', require("./routes/admin.route"))
app.use('/', require("./routes/auth.route"))

//listen app
app.listen(3005, function () {
    console.log("Server started on port 3005");
});


