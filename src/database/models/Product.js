module.exports = (sequelize, dataTypes) => {

    const alias = "Product";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        description: {
            allowNull: false,
            type: dataTypes.STRING
        },
        image: {
            allowNull: false,
            type: dataTypes.STRING
        },
        category: {
            allowNull: false,
            type: dataTypes.STRING
        }, 
        style: {
            allowNull: false,
            type: dataTypes.STRING
        }, 
        volumen: {
            allowNull: false,
            type: dataTypes.STRING
        },
        origin: {
            allowNull: false,
            type: dataTypes.STRING
        }, 
        brewer: {
            allowNull: false,
            type: dataTypes.STRING
        },
        price: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.FLOAT
        }
    }
    const config = {
        tableName: 'items',
        timestamps: false
    }


    const Product = sequelize.define(alias, cols, config);

     Product.associate = function(models) {
        Product.belongsTo(models.User, {
            foreignKey: 'UserId',
            as: 'Usuario',
            allowNull: true 
        });
    };


    return Product;
}