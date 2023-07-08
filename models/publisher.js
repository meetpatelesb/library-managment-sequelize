'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publisher extends Model {
   
    static associate(models) {
      //many to many
     publisher.belongsToMany(models.book, {
       through: "book_publishes",
       foreignKey: "publisher_id",
       otherKey: "book_id",
     });
    }
  }
  publisher.init({
    name: DataTypes.STRING,
    city:DataTypes.STRING,
    email:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'publisher',
  });
  return publisher;
};