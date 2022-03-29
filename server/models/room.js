'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Room.hasMany(models.Note, { foreignKey: 'roomId' });
      models.Room.hasMany(models.Mate, { foreignKey: 'roomId' });
      models.Room.hasMany(models.Like, { foreignKey: 'roomId' });
      models.Room.hasMany(models.Room_tag, { foreignKey: 'roomId' });
      models.Room.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Room.init(
    {
      link: DataTypes.STRING,
      channel: DataTypes.STRING,
      title: DataTypes.STRING,
      number_of_lectures: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      is_full: DataTypes.BOOLEAN,
      number_of_persons: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      question: DataTypes.STRING,
      comment: DataTypes.STRING,
      FCFS: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Room',
    }
  );
  return Room;
};
