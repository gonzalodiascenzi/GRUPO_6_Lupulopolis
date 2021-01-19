module.exports = (sequelize, dataTypes) => {
    const alias = "Items";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        unit_price: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        quantity: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        subTotal: {
            allowNull: false,
            type: dataTypes.DOUBLE
        },
        images: {
            allowNull: false,
            type: dataTypes.STRING
        },
        user_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        order_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'items',
        timestamps: false
    }

    const Orders = sequelize.define(alias, cols, config);

    return Orders;
}