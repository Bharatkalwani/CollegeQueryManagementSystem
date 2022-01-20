const express = require("express");
const app = express.Router();
const { checkAuthenticated } = require("../helper/helper");
var mngCtrl = require("../controller/management.controller");
 
  app.get("/management",checkAuthenticated, function(req, res){
  mngCtrl.getParentsComplains(req,res)
  });

  app.get("/suggestionMng",checkAuthenticated, function(req,res){
    mngCtrl.getSuggestions(req,res)
  });

  app.get("/showClgComplainMng",checkAuthenticated,function(req,res){
    mngCtrl.getCollegeComplains(req,res)
  });

  app.get("/showStdHostelComplain",checkAuthenticated,function(req,res){
    mngCtrl.getHostelComplains(req,res)
  });
  
  app.get("/showParentsComplain",checkAuthenticated,function(req,res){
    mngCtrl.getParentsComplains(req,res)
  });
  
  app.get("/feedHostel/:id",checkAuthenticated, async (req,res) => {
    mngCtrl.getHostelFeedback(req,res)
  });
  
  app.post("/feedHostel/:id",async function(req,res){
    mngCtrl.postHostelFeedback(req,res)
  });
  
  app.get("/feedbackParent/:id", async (req,res) => {
    mngCtrl.getParentFeedback(req,res)
  });
  
  app.post("/feedbackParent/:id",async function(req,res){
    mngCtrl.postParentFeedback(req,res)
  });
module.exports = app;