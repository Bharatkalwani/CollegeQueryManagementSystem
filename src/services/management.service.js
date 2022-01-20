const College = require("../models/college");
const Parent = require("../models/parent");
const Suggestion = require("../models/suggestion");
const Hostel = require("../models/hostel");
var MngService = function (use) {

};


MngService.GetParentsComplains = async function (req, res) {
    Parent.find({},function(err,parents){   
        posts=parents;
      res.render("management",{ posts:posts  });
      });
}

MngService.GetSuggestions = async function (req, res) { 
    Suggestion.find({},function(err,suggestions){  
     posts=suggestions;
   res.render("suggestionMng",{posts:posts   });
   });
}

MngService.GetCollegeComplains = async function (req, res) {
    College.find({},function(err,colleges){   
        posts=colleges;
      res.render("showClgComplainMng",{posts:posts   });
      });
}

MngService.GetHostelComplains = async function (req, res) {
    Hostel.find({},function(err,hostels){   
        posts=hostels;
      res.render("showStdHostelComplain",{posts:posts   });
      });
}

MngService.GetParentsComplains = async function (req, res) {
    Parent.find({},function(err,parents){   
        posts=parents;
      res.render("showParentsComplain",{posts:posts   });
      });      
}

MngService.GetHostelFeedback = async function (req, res) {
 const {id} = req.params;
 if(id.length < 12){
   res.status(401).send('Wrong Req')
 } 
 Hostel.findOne({_id: id}, (err, doc) => {
   if(err){
     res.send('Wrong Path')
   }else{
     const reply2 = doc.replyHostel.length > 0 ? doc.replyHostel[0] : {};
     res.render("feedHostel", {doc, reply2});
   }
 })
}

MngService.PostHostelFeedback = async function (req, res) {
  const {id} = req.params;
  const {teacherName, replyMessage} = req.body;
  Hostel.findOne({_id: id},  async (err, doc) => {
    if(err){
      res.send('Wrong Path')
    }else{
      const newDoc =  await Hostel.findOneAndUpdate({_id: id}, {replyHostel: [{teacherName, replyMessage}]}, {new: true});
      res.redirect(`/showStdHostelComplain?#id-${id}`);
    }

  });

}

MngService.GetParentFeedback = async function (req, res) {
 const {id} = req.params;
 if(id.length < 12){
   res.status(401).send('Wrong Req')
 } 
 Parent.findOne({_id: id}, (err, doc) => {
   if(err){

     res.send('Wrong Path')
   }else{
     const reply2 = doc.replyParent.length > 0 ? doc.replyParent[0] : {};
     res.render("feedbackParent", {doc, reply2});
   }
 })

}

MngService.PostParentFeedback = async function (req, res) {

  const {id} = req.params;
  const {teacherName, replyMessage} = req.body;
  Parent.findOne({_id: id},  async (err, doc) => {
    if(err){
      res.send('Wrong Path')
    }else{
      const newDoc =  await Parent.findOneAndUpdate({_id: id}, {replyParent: [{teacherName, replyMessage}]}, {new: true});
      res.redirect(`/showParentsComplain?#id-${id}`);
    }
  });

}

module.exports = MngService;