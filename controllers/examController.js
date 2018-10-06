const db = require("../models");


module.exports = {
  findExam:  function (req,res){
    db.exam.findAll({}).then(function(questions){
        res.json(questions)
    })
  }
};