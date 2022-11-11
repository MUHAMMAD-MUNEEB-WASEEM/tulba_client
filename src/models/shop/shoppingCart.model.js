const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const ShoppingCart = sequelize.define("shoppingCart", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdBy: {
      type: DataTypes.INTEGER,
      defaultValue: -1
    },
    updatedBy: {
      type: Sequelize.INTEGER,
      defaultValue: -1
    }
  }, {
    underscored: true
  });

  return ShoppingCart;
});
