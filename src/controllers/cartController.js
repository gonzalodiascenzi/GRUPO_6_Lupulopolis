const fs = require('fs');
const path = require('path');

const productHelper = require('../helpers/productHelper');

const controller = {
    showCart: (req, res) => {
        res.render('cart/productCart');
    }
}


module.exports = controller;