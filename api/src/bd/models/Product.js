const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Image: {
        type: DataTypes.TEXT,
      },
      Description: {
        type: DataTypes.TEXT,
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
};
// , description, price, stock, 