const {DataTypes } = require("sequelize");

module.exports = (sequelize) => {
     sequelize.define('Cart', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement : true
        },
        UserId:{
            type : DataTypes.UUID,
            allowNull : false,
            references : {
                model : "User",
                key : "id"
            }
        },
        ProductId : {
            type : DataTypes.UUID,
            allowNull : false,
            references : {
                model : "Product",
                id : "id"
            }
        },
        stock : {
            type : DataTypes.STRING,
            allowNull : false,
            defaultValue : 1
        }
    })
}