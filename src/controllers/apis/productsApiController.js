const db = require("../../database/models")

const productsApiController = {
    list: async (req, res) => {
        const productsAll = await db.Product.findAll({
            attributes: [
                'id',
                'product_name',
                'description',
            ],
            include: ['category'],
        });

        let countByCategory = await db.Product_Category.findAll({
            group: ['Product_Category.name'],
            attributes: [
                'name',
                [db.sequelize.fn("COUNT", db.sequelize.col('products.category_id')), "countByCategory"]
            ],
            include: ['products']
        })

        productsAll.map(product => {

            return (
                product.dataValues.detail = "http://localhost:3000/api/products/" + product.id,
                product
            );
        })

        res.json({
            meta: {
                status: 200,
                count: productsAll.length,
                countByCategory
            },
            data: {
                products : productsAll
            }
        })
    },
    find: async (req, res) => {
        const product = await db.Product.findOne({
            include: ['category']
        }, {
            where : { id : req.params.id}
        })

        res.json({
            meta: {
                status: 200
            },
            data: {
                product
            }
        })
    }
}


module.exports = productsApiController;