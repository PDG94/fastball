const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("OderProduct",
    {
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValues : 0
        }
    })
}