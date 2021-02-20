const db = require('../database/models');

const controller = {
    //Root - Inicio
    index: async (req, res) => {
        const allProducts = await db.Product.findAll();

        res.render('index', {
            allProducts : allProducts
        });
    },

    offers: function (req, res) {
        res.render('anothers/offers');
    },

    promotions: function (req, res) {
        res.render('anothers/promotions');
    },

    contact: function (req, res) {
        res.render('anothers/contact');
    }
};
module.exports = controller;