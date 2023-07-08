"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "book_borrows",
      [
        {
          member_id: 1,
          book_copy_id: 1,
          borrow_date: "12-05-2023",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 1,
          book_copy_id: 2,
          borrow_date: "12-05-2023",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 1,
          book_copy_id: 3,
          borrow_date: "12-05-2023",
          return_date: "25-05-2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 2,
          book_copy_id: 6,
          borrow_date: "25-05-2023",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 3,
          book_copy_id: 6,
          borrow_date: "26-05-2023",
          return_date: "30-05-2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 3,
          book_copy_id: 1,
          borrow_date: "26-05-2023",
          return_date: "30-05-2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 3,
          book_copy_id: 2,
          borrow_date: "26-05-2023",
          return_date: "30-05-2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 2,
          book_copy_id: 2,
          borrow_date: "12-06-2023",
          return_date: "22-06-2023",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          member_id: 2,
          book_copy_id: 4,
          borrow_date: "20-06-2023",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("book_borrows", null, {});
  },
};
