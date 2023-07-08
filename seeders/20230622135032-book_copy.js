'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
       "book_copies",
       [
         {
           book_publish_id: 1,
           language_id: 1,
           quantity: 10,
           publish_year: 2002,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_publish_id: 2,
           language_id: 3,
           quantity: 22,
           publish_year: 2006,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_publish_id: 3,
           language_id: 4,
           quantity: 5,
           publish_year: 2009,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_publish_id: 4,
           language_id: 3,
           quantity: 5,
           publish_year: 2003,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_publish_id: 3,
           language_id: 3,
           quantity: 5,
           publish_year: 2009,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           book_publish_id: 4,
           language_id: 4,
           quantity: 5,
           publish_year: 2003,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
       ],
       {}
     );  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("book_copies", null, {});

  }
};
