const db = require("../models");

module.exports = {

    findAllUsers: function(req, res) {
        db.user.findAll({}).then(function(dbUsers){
            res.json(dbUsers);
        });
    },

    findUser: function (req, res) {
        db.user.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser)
        });
    },

    createUser: function(req,res){
        db.user.create(req.body).then(function(dbUser) {
            res.json(dbUser);
          });
    },

};