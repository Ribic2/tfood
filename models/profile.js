'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class profile extends Model {};
  profile.init({
    id:{
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    attributes:{
      type: DataTypes.ENUM('buyer', 'company'),
    },
    userId:{
      type: DataTypes.INTEGER
    },
    createdAt:{
      type: DataTypes.DATE
    },
    updatedAt:{
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'profile',
  });
  return profile;
};