const { validationResult } = require('express-validator');
const db = require('../database/models');

const controller = {
    //Root - Inicio
    index: async (req, res) => {
        const allProducts = await db.Product.findAll(); //findbypk -> SELECT * FROM products WHERE id = ?

        res.render('products/products', {
            allProducts: allProducts
        });
    },
    create: async (req, res) => {
        const product = undefined;
        const productCategory = await db.Product_Category.findAll();
        return res.render('products/product-create-form', {product, productCategory});
    },
    store: async (req, res) => {
        const errors = validationResult(req);
        let product2 = undefined;
        const productCategory = await db.Product_Category.findAll();

        if (!errors.isEmpty()) {
            res.render('products/product-create-form', {
                product: product2,
                productCategory,
                errors: errors.errors,
                old: req.body
            });
        }

        console.log(req.file);

        const newProduct = {
            product_name: req.body.product_name,
            description: req.body.description,
            image: req.file.filename,
            category_id: req.body.category,
            style: req.body.style,
            volumen: req.body.volumen,
            origin: req.body.origin,
            brewer: req.body.brewer,
            price: req.body.price,
            discount: req.body.discount
        }

        const product = await db.Product.create(newProduct);

        return res.redirect(`/products/${product.id}`);
    },
    detail: async (req, res) => {
        const product = await db.Product.findOne({ where: { id: req.params.id } });
        const productCategory = await db.Product_Category.findAll();

        return res.render('products/productDetails', {
            product: product,
            productCategory
        });
    },
    edit: async (req, res) => {
        const product = await db.Product.findOne({ where: { id: req.params.id } })
        const productCategory = await db.Product_Category.findAll();

        if (product) {
            return res.render('products/product-create-form', {
                product: product,
                productCategory
            });
        }

        return res.redirect('/products');
       
    },
    update: async (req, res) => {
        const errors = validationResult(req);
        const productCategory = await db.Product_Category.findAll();

        if (!errors.isEmpty()) {
            res.render('products/product-create-form', {
                errors: errors.errors,
                productCategory
            });
        }

        await db.Product.update({
            product_name: req.body.product_name,
            description: req.body.description,
            image: req.file ? req.file.filename : product.image,
            category: req.body.category,
            style: req.body.style,
            volumen: req.body.volumen,
            origin: req.body.origin,
            brewer:req.body.brewer,
            price: req.body.price,
            discount: req.body.discount
        }, {
            where: {id : req.params.id}
        });

        return res.redirect('/products/' + req.params.id);
    },
    remove: async (req, res) => {
        await db.Product.destroy({
            where: {id : req.params.id}
        })

        return res.redirect('/products');
    }
};

module.exports = controller;
