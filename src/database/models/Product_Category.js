module.exports = (sequelize, dataTypes) => {

    const alias = "Product_Category";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }
    const config = {
        tableName: 'product_category',
        timestamps: false
    }


    const Product_Catergory = sequelize.define(alias, cols, config);

    return Product_Catergory;
}