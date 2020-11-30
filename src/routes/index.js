const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET home page. */

router.get('/', mainController.index);

router.get('/productDetails', function(req, res, next) {
  res.render('productDetails');
});

router.get('/productCart', function(req, res, next) {
  res.render('productCart');
});

module.exports = router;
