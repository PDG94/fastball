const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('order', {
        orderNumber : {
            type : DataTypes.TEXT,
            allowNull: false
        },
        totalAmount: {
            type : DataTypes.FLOAT,
            allowNull : false
        }
    })
}