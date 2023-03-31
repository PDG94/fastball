const { DataTypes } = require("sequelize"); //modelo agregado para prueba 

module.exports=(sequelize)=>{
    sequelize.define(
        "Color",{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true, 
            },
            codigo:{
                type:DataTypes.STRING,
                allowNull: false,
                unique:true
            }
        },
        {
            timestamps: false
        }
    )
}
