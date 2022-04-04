'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Message.belongsTo(models.User, { foreignKey: 'originId' });
      models.Message.belongsTo(models.User, { foreignKey: 'targetId' });
    }
  }
  Message.init(
    {
      originId: DataTypes.INTEGER,
      targetId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      readCheck: DataTypes.BOOLEAN,
      deleted: DataTypes.BOOLEAN,
      sendAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
  return Message;
};
