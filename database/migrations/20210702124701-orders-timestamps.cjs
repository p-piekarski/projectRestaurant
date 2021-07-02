'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'orders',
        'createdAt',
        {
          type: Sequelize.DATE
        }
      ),
      queryInterface.addColumn(
        'orders',
        'updatedAt',
        {
          type: Sequelize.DATE
        }
      ),
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('orders', 'createdAt'),
      queryInterface.removeColumn('orders', 'updatedAt')
    ]);
  }
};


