'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_copy extends Model {
   
    static associate(models) {
      //many to many
      book_copy.belongsToMany(models.user_membership, {
        through: "book_borrows",
        foreignKey: "book_copy_id",
        otherKey: "member_id",
      });
    }
  }
  book_copy.init(
    {
      book_publish_id: DataTypes.INTEGER,
      language_id: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
      publish_year: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "book_copy",
    }
  );
  return book_copy;
};