'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class language extends Model {
   
    static associate(models) {
      //many to many
      language.belongsToMany(models.book_publish, {
        through: "book_copies",
        foreignKey: "language_id",
        otherKey: "book_publish_id",
      });
    }
  }
  language.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'language',
  });
  return language;
};