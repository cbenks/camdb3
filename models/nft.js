'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Nft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nft.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Nft.init(
    {
      userId: DataTypes.INTEGER,
      blockchain: DataTypes.STRING,
      name: DataTypes.STRING,
      photo: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Nft',
      tableName: 'nfts'
    }
  )
  return Nft
}
