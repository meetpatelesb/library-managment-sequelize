const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const User = db.user;
const UserMembership = db.user_membership;
const Publisher = db.publisher;
const Language = db.language;
const Category = db.category;
const Book = db.book;
const Book_Publish = db.book_publish;
const Book_Copy = db.book_copy;
const Book_Category = db.book_category;
const Book_Borrow = db.book_borrow;
const Book_Author = db.book_author;
const Author = db.author;
const { Op, QueryTypes } = require("sequelize");

// const data = await result.findAll({
//   include: [
//     {
//       model: student,
//     },
//     {
//       model: subject,
//     },
//     {
//       model: exam,
//       attributes: ["id", "name", "type", "date"],
//     },
//   ],
// });

const showBookBorrowDetails = async (req, res) => {
  const showDetails = await Book_Copy.findAll({
    include: [
      {
        model: db.language,
      },
    ],
  });
};

const showBookPublications = async (req, res) => {
  const params = {
    page: req.body.data.page || 1,
    recordPerPage: req.body.data.recordPerPage || 3,
    sortDirection: req.body.data.sortDirection,
    sortField: req.body.data.sortField,
    search: req.body.data.search,
  };
  const { sortDirection, page, recordPerPage, sortField, search } = params;
  console.log(sortDirection, page, recordPerPage, sortField, search);

  let modelName;
  // switch (sortField) {
  //   case "name":
  //     modelName = "publisher";
  //     break;
  //   default:
  //     break;
  // }

  const { count, rows } = await Book.findAndCountAll({
    // where: {
    //   [Op.or]: [
    //     {
    //       "$book.title$": {
    //         [Op.like]: "%" + search + "%",
    //       },
    //     },
    //     {
    //       "$publisher.name$": {
    //         [Op.like]: "%" + search + "%",
    //       },
    //     },
    //   ],
    // },
    attributes: ["title"],
    include: [
      {
        model: Publisher,
        attributes: ["name"],
      },
    ],
    offset: (page - 1) * recordPerPage,
    limit: recordPerPage,
    // order: [[{ model: modelName }, sortField, sortDirection]],
  });

  res.json({ count, rows });
};
//com
const showBookAuthor = async (req, res) => {
  const showDetails = await Category.findAll({
    attribute: ["name"],
    // where: {
    //   name: {
    //     [Op.like]: "%sau%",
    //   },
    // },
    include: [
      {
        model: Book,
        attribute: ["title"],
        // where: {
        //   title: {
        //     [Op.like]: "%sau%",
        //   },
        // },
      },
    ],
  });

  res.json({ status: 200, showDetails });
};

const showMemberDetails = async (req, res) => {
  const params = {
    page: req.body.data.page || 1,
    recordPerPage: req.body.data.recordPerPage || 3,
    sortDirection: req.body.data.sortDirection,
    sortField: req.body.data.sortField,
    search: req.body.data.search,
  };

  const { sortDirection, page, recordPerPage, sortField, search } = params;
  let modelName;
  switch (sortField) {
    case "cardNo":
      modelName = "user_membership";
      break;
    case "membership_start":
      modelName = "user_membership";
      break;
    case "membership_end":
      modelName = "user_membership";
      break;
    default:
      break;
  }

  // paginations
  console.log(search);
  const { count, rows } = await UserMembership.findAndCountAll({
    where: {
      [Op.or]: [
        {
          "$user.userName$": {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          "$user.gender$": {
            [Op.like]: "%" + search + "%",
          },
        },  
        {
          "$user.city$": {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          "$user.email$": {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          "$user_membership.cardNo$": {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          "$user_membership.membership_start$": {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          "$user_membership.membership_end$": {
            [Op.like]: "%" + search + "%",
          },
        },
      ],
    },
    attribute: ["cardNo", "membership_start", "membership_end"],

    include: [
      {
        model: User,
        attribute: ["userName", "gender", "city", "email", "id"],
      },
    ],
    offset: (page - 1) * recordPerPage,
    limit: recordPerPage,
    order: [[{ model: modelName }, sortField, sortDirection]],
  });
  res.json({ count, rows });
  // res.json({rows:add})
};

module.exports = {
  showBookBorrowDetails,
  showBookPublications,
  showBookAuthor,
  showMemberDetails,
};
