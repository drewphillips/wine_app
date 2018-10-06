var express = require('express');
var router = express.Router();
var db = require('../Models');
var passport = require('passport');
require('../config/passport')(passport);
var bcrypt = require('bcrypt-nodejs');
const Op = require('sequelize').Op;
var Sequelize = require('sequelize');



// Auth Token
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

// Encrypt Password
var generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}



router.get('/populateExam', function (req, res) {
  db.Exam.findAll({
    where: {

    }
  }).then(function (products, err) {
    if (err) {
      console.log(err);
      return (err);
    }
    console.log(products);
    res.json(products);
  })
})

//dashboard pages routes
// Auth route - populate vendor dashboard based on their user id.
router.get('/exam/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  //change the request parameter from a string to a number
  //gets the request token
  var userId = parseInt(req.params.id);
  var token = getToken(req.headers);
  if (token) {
    //find all of the products
    db.Exam.findAll({
      //where the products foreign key is equal to the id passed as a parameter in the request
      where: { UserId: userId }
      //after info is grabbed from the database
    }).then(function (exams, err) {
      console.log(exams);
      console.log('success');
      console.log(err);
      //if there is an error, return the error
      if (err) {
        return (err);
      }
      //if there is no error, send the products back as json
      else {
        res.json(exams);
      }
    });
    //if user is unauthorized return info back to the user
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }

});

//this route grabs the market associated with the market organizer
//this is a very similar route to populateDashboardVendor
//route is first ran through passport for authentication
router.get('/Exam/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log('in');
  //request parameter needs to be parsed to a number before searching the database
  var userId = parseInt(req.params.id)
  var token = getToken(req.headers);
  if (token) {
    //find one exam
    db.Exam.findOne({
      //where the exam's foreign key matches the id passed as a request parameter
      where: { UserId: userId }
    }).then(function (market, err) {
      //if there is an error, return it
      if (err) {
        return err;
        //of there is no error, return the market's data as json
      } else {
        res.json(market);
      }
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized' });
  }
});

//Dashboard create product route
router.post('/examResults', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  var userId = parseInt(req.params.id)


  console.log(req.user.dataValues.id);
  console.log("here is the res.data:")
  console.log(req.user.dataValues);

  if (token) {
    console.log(req.user.dataValues.id);
    //create an object that contains all of the information we need from the request body
    //req.user.dataValues.id is attached to the request
    var examResults = {
    //   item: req.body.item,
      UserId: req.user.dataValues.id
    }

    // console.log("in if statement")

    // db.Product.create(newProduct)
    //   .then(function (products, err) {
    //     console.log(products);
    //     console.log('success');
    //     console.log(err);
    //     if (err) {
    //       return (err);
    //     }
    //     else {
    //       res.json(products);
    //     }
    //   });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }

})

// router.post('/newMarket', passport.authenticate('jwt', { session: false }), function (req, res) {
//   var token = getToken(req.headers);

//   console.log(req.user.dataValues.id);
//   console.log("here is the res.data:")
//   console.log(req.user.dataValues);

//   if (token) {
//     console.log(req.user.dataValues.id);

//     if(req.body.marketImage === ''){
//       var image = 'https://cfmatl.org/wp-content/uploads/2016/01/Grant-Park-Farmers-Market.jpg'
//     } else {
//       var image = req.body.marketImage
//     }

//     var newProduct = {
//       marketName: req.body.marketName,
//       marketAddress: req.body.marketAddress,
//       marketImage: image,
//       marketTime: req.body.marketTime,
//       marketZip: req.body.marketZip,
//       UserId: req.user.dataValues.id
//     }

//     db.Market.create(newProduct)
//       .then(function (products, err) {
//         console.log(products);
//         console.log('success');
//         console.log(err);
//         if (err) {
//           return (err);
//         }
//         else {
//           res.json(products);
//         }
//       });
//   } else {
//     return res.status(403).send({ success: false, msg: 'Unauthorized.' });
//   }

// })

//Dashboard update a product route

router.put('/updateProduct/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  let id = parseInt(req.params.id);
  if (token) {
    db.Product.update(
      {
        item: req.body.item,
        image: req.body.image
      },
      { where: { id: id } })
      .then(function (product, err) {
        if (err) {
          return (err);
        }
        else {
          res.json(product)
        }
      });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
})

//Dashboard update a market route

// router.put('/updateMarket/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
//   var token = getToken(req.headers);
//   let id = parseInt(req.params.id);
//   if (token) {
//     db.Market.update(
//       {
//         marketName: req.body.marketName,
//         marketAddress: req.body.marketAddress,
//         marketTime: req.body.marketTime,
//         marketImage: req.body.marketImage,
//         marketZip: req.body.marketZip
//       },
//       { where: { UserId: id } })
//       .then(function (market, err) {
//         if (err) {
//           return (err);
//         }
//         else {
//           res.json(market)
//         }
//       });
//   } else {
//     return res.status(403).send({ success: false, msg: 'Unauthorized.' });
//   }
// })


// Api route to update password from profile form
router.put('/updatePassword/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  let id = parseInt(req.params.id);
  console.log(token, id, req.body.password);
  if (token) {
    db.User.update(
      {
        password: generateHash(req.body.password),
      },
      { where: { id: id } })
      .then(function (user, err) {
        if (err) {
          return (err);
          console.log('failed')
        }
        else {
          res.json(user)
          console.log('success')
        }
      });
  } else {
    console.log('errrrr')
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
})

// router.delete('/deleteProduct/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
//   let token = getToken(req.headers);
//   let id = parseInt(req.params.id);
//   if (token) {
//     db.Product.destroy({
//       where: { id: id }
//     }).then(function (product, err) {
//       if (err) {
//         return (err);
//       } else {
//         res.json(product);
//       }
//     });
//   } else {
//     return res.status(403).send({ success: false, msg: 'Unauthorized' });
//   }
// })


//farmer page routes
router.get('/Results/:id', function (req, res) {
  db.User.findOne({
    where: { id: req.params.id }
  })
    .then(function (farmer, err) {
      if (err) return (err);
      else {
        res.json(farmer);
      }
    });
});





router.get('/retrieveRequests/:id', function (req, res) {
  let id = req.params.id;

  db.Exam.findOne({
    where: { UserId: id }
  }).then(function (market, error) {
    if (error) throw error;
    else {
      if (market === null) {
        res.send([]);
      } else {
        db.Request.findAll({
          where: {
            ExamId: exam.dataValues.id,
            hasAccepted: false
          }
        }).then(function (request, error) {
          if (error) throw error;
          else {
            console.log(request);
            res.json(request);
          }
        })
      }
    }
  })
});




module.exports = router;