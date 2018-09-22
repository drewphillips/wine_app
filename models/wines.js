var mongoose = require('mongoose');

var wineSchema = new mongoose.Schema({
    wineName: String,
    typeOfGrape: String,
    company: String,
    distributor: String,
    year: { type: Date },
    resturant: String,
    newInStock: { type: Date, default: Date.now },
  });


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* GET ALL WINES  */

router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE WINE */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;