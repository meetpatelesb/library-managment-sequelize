'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_borrow extends Model {
   
    static associate(models) {
      
    }
  }
  book_borrow.init(
    {
      member_id: DataTypes.INTEGER,
      book_copy_id: DataTypes.INTEGER,
      borrow_date: DataTypes.STRING,
      return_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "book_borrow",
    }
  );
  return book_borrow;
};