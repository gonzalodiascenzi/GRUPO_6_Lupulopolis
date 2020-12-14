const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../data/productData.json');

function getAllProducts(){

	const jsonProducts = fs.readFileSync(productsFilePath, 'utf-8');

	const productsParsed = JSON.parse(jsonProducts);

	return productsParsed;
}

const controller = {
    //Root - Inicio
    index: (req, res) => {
        const allProducts = getAllProducts();

        res.render('index', {
            allProducts : allProducts
        });
    }
};

module.exports = controller;