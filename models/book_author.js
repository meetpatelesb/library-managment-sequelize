'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_author extends Model {
   
    static associate(models) {
     
    }
  }
  book_author.init(
    {
      book_id: DataTypes.INTEGER,
      author_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "book_author",
    }
  );
  return book_author;
};