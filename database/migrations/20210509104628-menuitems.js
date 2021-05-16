'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('menuItems', {
      itemId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
      name:{ type: Sequelize.STRING},
      price:{type: Sequelize.INTEGER}

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('menuItems');

  }
};
