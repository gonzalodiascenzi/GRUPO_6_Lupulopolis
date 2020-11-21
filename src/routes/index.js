<<<<<<< HEAD
const express = require('express');
const router = express.Router();

// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, __dirname + '/../../public/images/products')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname)
//     }
//   })
   
// const upload = multer({ storage: storage })

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET home page. */

router.get('/', mainController.index);
=======
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
>>>>>>> origin

router.get('/productDetails', function(req, res, next) {
  res.render('productDetails');
});

router.get('/productCart', function(req, res, next) {
  res.render('productCart');
});





module.exports = router;
