"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book_category extends Model {
    static associate(models) {}
  }
  book_category.init(
    {
      book_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "book_category",
    }
  );
  return book_category;
};
