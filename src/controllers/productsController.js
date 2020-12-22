const fs = require('fs');
const path = require('path');

const productHelper = require('../helpers/productHelper');

const productsFilePath = path.resolve(__dirname, '../data/productData.json');

function writeProducts(arrayToTransform) {
	const productsJson = JSON.stringify(arrayToTransform, null, " ");
	fs.writeFileSync(productsFilePath, productsJson);
}

function generateNewId(){
	const products = productHelper.getAllProducts();
	return products.pop().id + 1;
}

const controller = {
    //Root - Inicio
    index: (req, res) => {
        const allProducts = productHelper.getAllProducts();

        res.render('products', {
            allProducts: allProducts
        });
    },
    create: (req, res) => {
        res.render('product-create-form');
        return res.render('products/product-create-form');
    },
    store: (req, res) => {
        const newProduct = {
            id: generateNewId(),
            product_name: req.body.product_name,
            description: req.body.description,
            image: req.file.filename,
            category: req.body.category,
            style: req.body.style,
            volumen: req.body.volumen,
            origin: req.body.origin,
            brewer: req.body.brewer,
            price: req.body.price,
            discount: req.body.discount
        }

        const products = productHelper.getAllProducts();
        const productsToSave = [...products, newProduct];

        writeProducts(productsToSave);

        return res.redirect(`/products/${newProduct.id}`);
    },
    detail: (req, res) => {
        const product = productHelper.getAllProducts().find(product => product.id == req.params.id);

        return res.render('productDetails', {
            product: product
        });
    },
    edit: (req, res) => {
        const product = productHelper.getAllProducts().find(product => product.id == req.params.id);
        const productImagePath = path.resolve(__dirname, '/images/products/', product.image);
        console.log(productImagePath)
        if (product !== 'undefined') {

            return res.render('products/product-create-form', {
                product: product,
                productImagePath: productImagePath
            });
        }

        return res.render('product-create-form');
        return res.render('products/product-create-form');
        
    },
    update: (req, res) => {
        const products = productHelper.getAllProducts();
        console.log(req.file)
        const changedProducts = products.map(product => {
            if (req.params.id == product.id) {
                product.product_name = req.body.product_name,
                product.description = req.body.description,
                product.image = req.file ? req.file.filename : product.image,
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
        return res.redirect('/products/' + req.params.id);
    },
    remove: (req, res) => {
        const products = productHelper.getAllProducts();
        const productsRemoved = products.filter(product => product.id != req.params.id);

        writeProducts(productsRemoved);
        console.log(productsRemoved);
        return res.redirect('/products');
    }
};

module.exports = controller;
