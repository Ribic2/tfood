'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {};
  
  order.init({
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};