'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Like.belongsTo(models.User, { foreignKey: 'userId' });
      models.Like.belongsTo(models.User, { foreignKey: 'targetId' });
      models.Like.belongsTo(models.Room, { foreignKey: 'roomId' });
    }
  }
  Like.init(
    {
      room_id: DataTypes.INTEGER,
      target_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      checked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
