'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     "authors",
     [
       {
         name: "zaverchand meghaniji",
         email: "zm@gmail.com",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "shahbuddin rathodji",
         email: "sr@gmail.com",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "narsinh mehta",
         email: "nm@gmail.com",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       
     ],
     {}
   );
  
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete("authors", null, {});
     
  }
};
