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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      soldAmount: {
        type: DataTypes.INTEGER,
        defaultValue : 0
      },
      visits: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
};
// , description, price, stock, 