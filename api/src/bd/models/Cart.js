const {DataTypes } = require("sequelize");

module.exports = (sequelize) => {
     sequelize.define('Cart', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement : true
        },
        stock : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValue : 1
        }
    })
}