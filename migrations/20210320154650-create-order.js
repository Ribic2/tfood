'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
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
      buyerId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'buyers',
          key: 'id'
        },
      },
      productId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'offers',
          key: 'id'
        },
      },
      repeated:{
        type: Sequelize.ENUM,
        values:['daily', 'monthly', 'weekly']
      },
      amount: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('orders');
  }
};