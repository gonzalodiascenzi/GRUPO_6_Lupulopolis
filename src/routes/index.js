var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/productDetails', function(req, res, next) {
  res.render('productDetails');
});

router.get('/productCart', function(req, res, next) {
  res.render('productCart');
});





module.exports = router;
