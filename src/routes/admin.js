const express = require('express');
const router = express.Router();

/* Require Middleware */



// PRODUCT CART 
router.get('/', (req, res) => {
    res.render('admin/index');
});


module.exports = router;