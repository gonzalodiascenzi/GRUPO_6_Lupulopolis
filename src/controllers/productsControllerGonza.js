
const helper = require('../helpers/helpers') // Requiero a las funciones de helpers


//controllers 

const productController = {
	detail: (req, res) => {
		const id = req.params.id;
		const products = helper.getAllProducts();
		const result = products.find((product) => {
			return product.id == id
		});

		res.render('detail', {product: result});
	},

    cart: (req, res) => {
		const products = helper.getAllProducts();
		const specialsProducts = products.filter((product) => {
			return product.id < 4;
		});

		let subTotal = 0;
		for (let i = 0; i < specialsProducts.length; i++) {
			const element = specialsProducts[i].price;
			subTotal += element;
		}
		const shipping = 400;
		const total = subTotal + shipping;
		
		res.render('cart', {products: specialsProducts, subTotal: subTotal, shipping: shipping, total: total});
    },

    listaProductos: (req, res) => {
        const products = helper.getAllProducts();
        res.render('listProducts', {products: products});
    }

}

module.exports = productsController;