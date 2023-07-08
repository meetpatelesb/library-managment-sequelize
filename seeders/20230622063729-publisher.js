'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert(
        "publishers",
        [
          {
            name: "eklavya publications ",
            city: "ahmedabad",
            email: "eklavya@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "seth publications ",
            city: "rajkot",
            email: "seth@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "patel publications ",
            city: "surat",
            email: "patel@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('publishers', null, {});
     
  }
};
