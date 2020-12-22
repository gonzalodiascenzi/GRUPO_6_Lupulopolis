const express = require('express');
const router = express.Router();

/* Require Middleware */
const cartController = require('../controllers/cartController');


// PRODUCT CART 
router.get('/', cartController.showCart);


module.exports = router;