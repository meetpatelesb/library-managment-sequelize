const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const Book = db.book;
const Book_Author = db.book_author;
const Book_Publish = db.book_publish;
const Book_Category = db.book_category;

const { Op, QueryTypes } = require("sequelize");

const addBook = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const insertData = req.body;
    const addBookData = await Book.bulkCreate(
  insertData  ,
     {transaction:t}
    );
    await t.commit();
    console.log(addBookData.dataValues);
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

module.exports = {
  addBook,
};
