'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement:true,
    },
    username: {
      type:DataTypes.STRING,allowNull: false,
    },
    email:{
      type:DataTypes.STRING,allowNull: false,unique:true,
    },
    password: {
      type:DataTypes.STRING,allowNull: false,
    },
    token: {
      type:DataTypes.STRING,allowNull: true,
    },
    refreshToken: {
      type:DataTypes.STRING,allowNull: true,
    },
    is_active: {
      type:DataTypes.BOOLEAN,defaultValue:true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'user',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users'
  });
  return user;
};