"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      //one to one
      user.hasOne(models.user_membership, {
        foreignKey: "member_id",
      });
    }
  }
  user.init(
    {
      userName: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female", "others"),
      city: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
