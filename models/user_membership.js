'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_membership extends Model {
    
    static associate(models) {
      //one to one
      user_membership.belongsTo(models.user, {
        foreignKey: "member_id",
      });

      //many to many
     user_membership.belongsToMany(models.book_copy, {
       through: "book_borrows",
       foreignKey: "member_id",
       otherKey: "book_copy_id",
     });
    }
  }
  user_membership.init(
    {
      member_id: DataTypes.INTEGER,
      cardNo: DataTypes.STRING,
      membership_start: DataTypes.STRING,
      membership_end: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_membership",
    }
  );
  return user_membership;
};