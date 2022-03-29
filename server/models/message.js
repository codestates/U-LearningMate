'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init({
    origin_id: DataTypes.INTEGER,
    target_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    read_check: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN,
    send_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};