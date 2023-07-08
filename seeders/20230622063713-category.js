'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert(
        "categories",
        [
          {
            name: "history",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "geography",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "story",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "documentory",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete("categories", null, {});
     
  }
};
