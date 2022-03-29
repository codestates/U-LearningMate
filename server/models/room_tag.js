'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Room_tag.belongsTo(models.Tag, { foreignKey: 'tagId' });
      models.Room_tag.belongsTo(models.Room, { foreignKey: 'roomId' });
    }
  }
  Room_tag.init(
    {
      room_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Room_tag',
    }
  );
  return Room_tag;
};
