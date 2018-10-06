const db = require("../models");

// Defining methods for the booksController
module.exports = {
    createUser: function(req,res){
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
          });
    },

    findUser: function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser)
        });
      },

    findAllUsers: function(req, res) {
        db.User.findAll({}).then(function(dbUsers){
            res.json(dbUsers);
        });
    }

}