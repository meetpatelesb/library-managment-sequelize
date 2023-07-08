'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
   
    static associate(models) {
      //many to many
      book.belongsToMany(models.category, {
        through: "book_categories",
        foreignKey: "book_id",
        otherKey: "category_id",
      });

        //many to many
        book.belongsToMany(models.author, {
          through: "book_authors",
          foreignKey: "book_id",
          otherKey: "auther_id",
        });
    

      //many to many
      book.belongsToMany(models.publisher, {
        through: "book_publishes",
        foreignKey: "book_id",
        otherKey: "publisher_id",
      });
    }
  }
  book.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "book",
    }
  );
  return book;
};