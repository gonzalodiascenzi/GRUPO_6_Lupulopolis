const fs = require('fs');
const path = require('path');


const productsFilePath = path.resolve(__dirname, '../data/productData.json');

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

        res.render('products', {
            allProducts: allProducts
        });
    },
    create: (req, res) => {
        res.render('product-create-form');
    },
    store: (req, res, next) => {
        const newProduct = {
            id: generateNewId(),
            product_name: req.body.product_name,
            description: req.body.description,
            image: req.files[0].filename,
            category: req.body.category,
            style: req.body.style,
            volumen: req.body.volumen,
            origin: req.body.origin,
            brewer: req.body.brewer,
            price: req.body.price,
            discount: req.body.discount
        }

        console.log(newProduct);
        const products = getAllProducts();
        const productsToSave = [...products, newProduct];

        writeProducts(productsToSave);

        res.redirect('/products');
    },
    detail: (req, res) => {
        const product = getAllProducts().find(product => product.id == req.params.id);

        return res.render('productDetails', {
            product: product
        });
    },
    edit: (req, res) => {
        const product = getAllProducts().find(product => product.id == req.params.id);

        if (typeof product !== 'undefined') {
            return res.render('product-create-form', {
                product: product
            });
        }

        return res.render('product-create-form');
        
    },
    update: (req, res) => {
        const products = getAllProducts();
        const changedProducts = products.map(product => {
            if (req.params.id == product.id) {
                product.product_name = req.body.product_name,
                product.description = req.body.description,
                product.image = req.files[0].filename,
                product.category = req.body.category,
                product.style = req.body.style,
                product.volumen = req.body.volumen,
                product.origin = req.body.origin,
                product.brewer = req.body.brewer,
                product.price = req.body.price,
                product.discount = req.body.discount
            }

            return product;
        });

        writeProducts(changedProducts);

        res.redirect('/products/' + req.params.id);
    },
    remove: (req, res) => {
        const products = getAllProducts();
        const productsRemoved = products.filter(product => product.id != req.params.id);

        writeProducts(productsRemoved);
        console.log(productsRemoved);
        res.redirect('/products');
    }
};

module.exports = controller;
