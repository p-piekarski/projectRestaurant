'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('tables', {
      tableId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
      isFree: { type: Sequelize.BOOLEAN },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('tables');

  }
};
