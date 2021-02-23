module.exports = (sequelize, DataTypes) => {
    let alias = 'Items';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        producttulo: {
            type: DataTypes.STRING
        },
        productPrecio: {
            type: DataTypes.DECIMAL
        },
        productImage: {
            type: DataTypes.STRING
        },
        productCant: {
            type: DataTypes.INTEGER
        },
       
        totalPrice: {
            type: DataTypes.DECIMAL
        },
        purchaseId: {
            type: DataTypes.INTEGER
        },
        state: {
            type: DataTypes.TINYINT
        }
    };

    let config = {
        tableName: 'items', 
        timestamps: false
    };

    const Item = sequelize.define(alias, cols, config);

    Item.associate = function(models) {
        Item.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'users'
        });
    }
    Item.associate = function(models) {
        Item.belongsTo(models.Purchases, {
            foreignKey: 'purchaseId',
            as: 'purcharse',
            allowNull: true
        });
    };

    return Item;
}