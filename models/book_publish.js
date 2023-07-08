'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_publish extends Model {
   
    static associate(models) {
      //many to many
      book_publish.belongsToMany(models.language, {
        through: "book_copies",
        foreignKey: "book_publish_id",
        otherKey: "language_id",
      });
    }
  }
  book_publish.init(
    {
      book_id: DataTypes.INTEGER,
      publisher_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "book_publish",
    }
  );
  return book_publish;
};