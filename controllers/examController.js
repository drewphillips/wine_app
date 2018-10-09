const db = require("../models");


module.exports = {
  findExam:  function (req,res){
    db.exams.findAll({}).then(function(questions){
        res.json(questions)
    })
  }
};