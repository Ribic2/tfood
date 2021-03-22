'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'profiles',
          key: 'id'
        },
      },
      companyName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      companyDescription: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      companyLocation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      companyTelephone: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doesDelivery: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      authenticationCode:{
        allowNull: false,
        type: Sequelize.INTEGER(4),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('companies');
  }
};