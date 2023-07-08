'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     "book_categories",
     [
       {
         book_id: 1,
         category_id: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         book_id: 1,
         category_id: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         book_id: 2,
         category_id: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         book_id: 3,
         category_id: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         book_id: 3,
         category_id: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("book_categories", null, {});
  }
};
