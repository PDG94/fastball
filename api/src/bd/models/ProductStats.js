const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ProductStats",
    {
      soldAmount: {
        type: DataTypes.INTEGER,
        defaultValue : 0,
      },
      usersVisits: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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