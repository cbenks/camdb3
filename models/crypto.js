'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Crypto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Crypto.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Crypto.init(
    {
      userId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Crypto',
      tableName: 'cryptos'
    }
  )
  return Crypto
}
