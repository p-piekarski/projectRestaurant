"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("example", {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      data: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("example");
  },
};