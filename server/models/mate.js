'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mate.init({
    room_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    accepted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Mate',
  });
  return Mate;
};