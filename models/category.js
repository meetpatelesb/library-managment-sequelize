'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    
    static associate(models) {
      //many to many
      category.belongsToMany(models.book, {
        through: "book_categories",
        foreignKey: "category_id",
        otherKey: "book_id",
      });
    }
  }
  category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};