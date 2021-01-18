module.exports = (sequelize, dataTypes) => {

    const alias = "Orders";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        order_number: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        user_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        total: {
            allowNull: false,
            type: dataTypes.DOUBLE
        }
    }
    
    const config = {
        tableName: 'orders',
        timestamps: false
    }

    const Orders = sequelize.define(alias, cols, config);

    return Orders;
}