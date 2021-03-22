'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', [
        {
          email: 'vid.bukovec8361@gmail.com',
          password: 'test123',
        },
        {
          email: 'zan@starasinic.com',
          password: 'test123'
        }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
