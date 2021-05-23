'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('orderItems', {
      orderItemId: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
      orderId:{type: Sequelize.INTEGER},
      itemId:{type: Sequelize.INTEGER},
      price:{type: Sequelize.INTEGER}
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('orderItems');

  }
};
