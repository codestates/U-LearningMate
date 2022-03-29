'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Model.Note.belongsTo(User, { foreignKey: 'userId' });
      Model.Note.belongsTo(Room, { foreignKey: 'roomId' });
    }
  }
  Note.init(
    {
      room_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Note',
    }
  );
  return Note;
};
