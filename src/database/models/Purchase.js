module.exports = (sequelize, DataTypes) => {
    let alias = 'Purchases';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderNumber: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.DECIMAL
        }
    };

    let config = {
        tableName: 'purchases', 
        timestamps: false
    };

    const Purchase = sequelize.define(alias, cols, config);

    Purchase.associate = function(models) {
        Purchase.hasMany(models.Product, {
            foreignKey: 'purchaseId',
            as: 'item-purchase'
        });
    };


    return Purchase;
};