'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'companies',
          key: 'id'
        },
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount:{
        type: Sequelize.INTEGER
      },
      productImage:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      productImageDirectory:{
        type: Sequelize.STRING,
        allowNull: false
      },
      description:{
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('offers');
  }
};