'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buyers', {
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
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      surname:{
        allowNull: false,
        type: Sequelize.STRING
      },
      location:{
        allowNull: false,
        type: Sequelize.STRING
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING
      },
      telephone:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('buyers');
  }
};