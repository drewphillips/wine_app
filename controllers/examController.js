const db = require("../models");


module.exports = {
  findExam:  function(req,res) {
    db.exam.findAll({}).then(function(iAmTheExam){

      console.log("gotem",iAmTheExam);

      res.json({user:"I am the user"});


    });
  }
};