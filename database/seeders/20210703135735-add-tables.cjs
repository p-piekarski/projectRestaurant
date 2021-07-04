'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tables', [
      {
        "tableId": 1,
        isFree: true
      },
      {
        "tableId": 2,
        isFree: true
      },
      {
        "tableId": 3,
        isFree: true
      },
      {
        "tableId": 4,
        isFree: true
      },
      {
        "tableId": 5,
        isFree: true
      },
      {
        "tableId": 6,
        isFree: true
      },
      {
        "tableId": 7,
        isFree: true
      },
      {
        "tableId": 8,
        isFree: true
      },
      {
        "tableId": 9,
        isFree: true
      },
      {
        "tableId": 10,
        isFree: true
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tables', null, {});
  }
};
