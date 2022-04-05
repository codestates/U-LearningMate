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
      models.Note.belongsTo(models.User, { foreignKey: 'userId' });
      models.Note.belongsTo(models.Room, { foreignKey: 'roomId' });
    }
  }
  Note.init(
    {
      roomId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Note',
    }
  );
  return Note;
};
