const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findExam:  function (req,res){
    db.Exam.findAll({}).then(function(questions){
        res.json(questions)
    })


  }
};