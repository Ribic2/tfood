'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies',[
      {
        profileId: 2,
        companyName: 'Burek d.o.o',
        companyDescription: 'Prodajamo burek!',
        companyLocation: 'Metlika 5',
        companyTelephone: '041224422',
        email:'burek@starasinic.com',
        doesDelivery: true,
        authenticationCode: 8888,
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
