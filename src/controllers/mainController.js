const db = require('../database/models');

const controller = {
    //Root - Inicio
    index: async (req, res) => {
        const allProducts = await db.Product.findAll();

        res.render('index', {
            allProducts : allProducts
        });
    }
};
module.exports = controller;