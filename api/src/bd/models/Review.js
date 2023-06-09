const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Review",
    {
        date: {
            type: DataTypes.DATEONLY,
        },
        score : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValues : 0
        },
        description : {
            type : DataTypes.TEXT,
            allowNull : false,
            defaultValues : ''
        },
        status : {
            type : DataTypes.ENUM('Pending', 'Done', 'Declined'),
            allowNull : false,
            defaultValues : 'Pending'
        },
        active : {
            type: DataTypes.BOOLEAN,
            defaultValues: true
        }
    })
}