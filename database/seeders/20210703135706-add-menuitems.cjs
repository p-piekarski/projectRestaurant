'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menuItems', [
      {
        itemId: 1,
        name: 'Schabowy z ziemniakami',
        price: 2200,
      },
      {
        itemId: 2,
        name: 'Schabowy z frytkami',
        price: 2000,
      },
      {
        itemId: 3,
        name: 'Zupa pomidorowa',
        price: 1500,
      },
      {
        itemId: 4,
        name: 'Spaghetti',
        price: 2200,
      },
      {
        itemId: 5,
        name: 'Łosoś z frytkami',
        price: 3000,
      },
      {
        itemId: 6,
        name: 'Łosoś z ziemniakami',
        price: 3000,
      },
      {
        itemId: 7,
        name: 'Pstrąg z frytkami',
        price: 3000,
      },
      {
        itemId: 8,
        name: 'Kotlet mielony z ziemniakami',
        price: 2600,
      },
      {
        itemId: 9,
        name: 'Barsz czerwony',
        price: 1400,
      },
      {
        itemId: 10,
        name: 'Barsz Biały',
        price: 1600,
      },
      {
        itemId: 11,
        name: 'Rosół',
        price: 1500,
      },
      {
        itemId: 12,
        name: 'Sok jabłkowy',
        price: 700,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menuItems', null, {});
  }
};
