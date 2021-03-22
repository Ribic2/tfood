'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles',[
        {
            attributes: 'buyer',
            userId: 1,
        },
        {
            attributes: 'company',
            userId: 2
        },
        {
            attributes: 'buyer',
            userId: 2
        }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('profiles', null, {});
  }
};
