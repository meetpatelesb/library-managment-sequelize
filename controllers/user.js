const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const User = db.user;
const UserMembership = db.user_membership;
const { Op, QueryTypes } = require("sequelize");
const addUser = async (req, res) => {
  // {
  //       "userName": "nikita",
  //       "gender":"female",
  //       "city":"surat",
  //       "email":"niki@gmail.com",
  //       "user_membership": {
  //         "cardNo":"33cc22",
  //         "membership_start":"17-05-2023",
  //         "membership_end":"17-05-2024"

  //       }
  //     }
  const t = await db.sequelize.transaction();
  try {
    const insertData = req.body;
    const addUserData = await User.create(insertData, {
      include: [{ model: UserMembership }],
      transaction: t,
    });
    await t.commit();
    console.log(addUserData.dataValues);
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

module.exports = {
  addUser,
};
