'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menuItems', [
      {
        name: 'Schabowy z ziemniakami',
        price: 2200,
      },
      {
        name: 'Schabowy z frytkami',
        price: 2000,
      },
      {
        name: 'Zupa pomidorowa',
        price: 1500,
      },
      {
        name: 'Spaghetti',
        price: 2200,
      },
      {
        name: 'Łosoś z frytkami',
        price: 3000,
      },
      {
        name: 'Łosoś z ziemniakami',
        price: 3000,
      },
      {
        name: 'Pstrąg z frytkami',
        price: 3000,
      },
      {
        name: 'Kotlet mielony z ziemniakami',
        price: 2600,
      },
      {
        name: 'Barsz czerwony',
        price: 1400,
      },
      {
        name: 'Barsz Biały',
        price: 1600,
      },
      {
        name: 'Rosół',
        price: 1500,
      },
      {
        name: 'Sok jabłkowy',
        price: 700,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menuItems', null, {});
  }
};
