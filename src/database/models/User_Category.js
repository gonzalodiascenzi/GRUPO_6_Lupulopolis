module.exports = (sequelize, dataTypes) => {

    const alias = "User_Category";
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
        tableName: 'user_category',
        timestamps: false
    }


    const User_Category = sequelize.define(alias, cols, config);

    return User_Category;
}