'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
       "book_authors",
       [
         {
           book_id: 1,
           author_id: 1,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_id: 3,
           author_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_id: 2,
           author_id: 3,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_id: 1,
           author_id: 2,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
       ],
       {}
     );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("book_authors", null, {});
  }
};
