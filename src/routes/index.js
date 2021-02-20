const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET home page. */

router.get('/', mainController.index);

router.get('/offers',(req, res) => {
    res.render('another/offers');
  });

router.get('/promotions', (req, res) => {
    res.render('another/promotions');
  });

router.get('/contact',(req, res) => {
    res.render('another/contact');
  });

module.exports = router;
