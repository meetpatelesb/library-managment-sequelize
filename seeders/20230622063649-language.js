"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "languages",
      [
        {
          name: "hindi",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "english",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gujarati",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sanskrut",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("languages", null, {});
  },
};
