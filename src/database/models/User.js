module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        category: {
            allowNull: false,
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }
    }
    const config = {
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}