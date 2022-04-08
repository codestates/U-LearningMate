'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Room, { foreignKey: 'userId' });
      models.User.hasMany(models.Note, { foreignKey: 'userId' });
      models.User.hasMany(models.Mate, { foreignKey: 'userId' });
      models.User.hasMany(models.Like, { foreignKey: 'userId' });
      models.User.hasMany(models.Like, { foreignKey: 'targetId' });
      models.User.hasMany(models.Message, { foreignKey: 'originId' });
      models.User.hasMany(models.Message, { foreignKey: 'targetId' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      score: DataTypes.INTEGER,
      oauth: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
