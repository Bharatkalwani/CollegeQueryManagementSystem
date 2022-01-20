
const Suggestion = require("../models/suggestion");
const Teacher = require("../models/teacherComplain");
const College = require("../models/college");

var TeacherService = function (use) {

};

TeacherService.GetTeacherComplains = async function (req, res) {
  Teacher.find({}, function (err, teachers) {   
    posts = teachers;
    res.render("teacherComplain", { posts: posts});
  });
}

TeacherService.ComposeTeacher = async function (req, res) {
  const teacherName = req.user.name
  console.log('Teacher name',teacherName)
  const value = req.body.complain;
  
  if (value === "complain") {
    const teacher = new Teacher({
      name:teacherName ,
      title: req.body.postTitle,
      content: req.body.postContent,
      branch: req.body.branch,
      section: req.body.section,
      year: req.body.year
    });
    teacher.save();
   Teacher.find({}, function (err, teachers) {  
      posts = teachers;
      res.render("teacherComplain", {posts: posts});
    });
  }
  else {
    const suggestion = new Suggestion({
      name: teacherName,
      title: req.body.postTitle,
      content: req.body.postContent,
      branch: req.body.branch,
      section: req.body.section,
      year: req.body.year
    });
    suggestion.save();
    Suggestion.find({}, function (err, suggestions) {  
      posts = suggestions;
      res.render("suggestionTch", {   posts: posts });
    });
  }
}

TeacherService.SuggestionTeacher = async function (req, res) {
  Suggestion.find({}, function (err, suggestions) {   
    posts = suggestions;
    res.render("suggestionTch", {posts: posts});
  });
}


TeacherService.GetStudentComplain = async function (req, res) {
  const  name  = req.user.name
  console.log("name",name)
  College.find({ teacher: name }, function (err, colleges) {   
    posts = colleges;
    res.render("showStdComplain", { posts: posts });
  });
}

TeacherService.CollegeFeedback = async function (req, res) {
  const ary=[req.params.id]
  const id=ary[0];  
  const name=req.user.name;

if(id.length < 12){
 res.status(401).send('Wrong Req')
} 
College.findOne({_id: id}, (err, doc) => {
 if(err){
  res.render('home')
  // res.send('Wrong Path')
 }else{
   const reply = doc.reply.length > 0 ? doc.reply[0] : {};
   res.render("feedback", {doc, reply,name:name});
 }
})

}

TeacherService.PostFeedback = async function (req, res) {
  const ary=[req.params.id]
  const id=ary[0];  
  const name=req.user.name;
 
  const teacherName=name
  const replyMessage = req.body.replyMessage;
  College.findOne({_id: id},  async (err, doc) => {
    if(err){
      res.render('home')
    }else{
      const newDoc =  await College.findOneAndUpdate({_id: id}, {reply: [{teacherName, replyMessage}]}, {new: true});
      res.redirect('/showStdComplain/');
    }
  });

}

module.exports = TeacherService;
