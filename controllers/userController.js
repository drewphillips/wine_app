const db = require("../models");

module.exports = {
<<<<<<< HEAD

    findAllUsers: function(req, res) {
        db.user.findAll({}).then(function(dbUsers){
            res.json(dbUsers);
=======
    createUser: function (req, res) {
        db.user.create(req.body).then(function (dbUser) {
            res.json(dbUser);
>>>>>>> master
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
    //   test route for post man 
    //   http://localhost:3000/api/user/allusers

<<<<<<< HEAD
    createUser: function(req,res){
        db.user.create(req.body).then(function(dbUser) {
            res.json(dbUser);
          });
    },
=======
    findAllUsers: function (req, res) {
        db.user.findAll({}).then(function (dbUsers) {
            res.json(dbUsers);
        });
    }
>>>>>>> master

};