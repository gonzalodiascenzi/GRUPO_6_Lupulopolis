/* const fs = require('fs');
const path = require('path');
const { index } = require('../../../mercadoliebre/src/controllers/productsController');

const productsFilePath = path.resolve(__dirname, '../data/productsData.json');

function getAllProducts(){

	const jsonProducts = fs.readFileSync(productsFilePath, 'utf-8');

	const productsParsed = JSON.parse(jsonProducts);

	return productsParsed;
}

function writeProducts(arrayToTransform) {
	const productsJson = JSON.stringify(arrayToTransform, null, " ");
	fs.writeFileSync(productsFilePath, productsJson);
}

function generateNewId(){
	const products = getAllProducts();
	return products.pop().id + 1;
}

const controller = {
    //Root - Inicio
    index: (req, res) => {
        const allProducts = getAllProducts();

        res.render('index', {
            allProducts : allProducts
        });
    }
}; */