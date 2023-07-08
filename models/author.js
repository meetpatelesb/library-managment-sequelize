'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
   
    static associate(models) {
      //many to many
      author.belongsToMany(models.book, {
        through: "book_authors",
        foreignKey: "auther_id",
        otherKey: "book_id",
      });
    }
  }
  author.init({
    name: DataTypes.STRING,
    email:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};