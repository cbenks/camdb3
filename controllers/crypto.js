const { Crypto, User } = require('../models')

const findAllCryptos = async (req, res) => {
  try {
    let cryptos = await Crypto.findAll()
    res.send(cryptos)
  } catch (error) {
    throw error
  }
}

const findCryptosByUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let cryptos = await Crypto.findAll({
      where: { userId: userId },
      include: [{ model: User }]
    })
    res.send(cryptos)
  } catch (error) {
    throw error
  }
}

const createCrypto = async (req, res) => {
  try {
    let userId = parseInt(req.body.userId)
    let crypto = await Crypto.create({
      ...req.body,
      userId
    })
    res.send(crypto)
  } catch (error) {
    throw error
  }
}

const updateCrypto = async (req, res) => {
  try {
    let cryptoId = parseInt(req.params.cryptoId)
    let cryptoBody = await Crypto.update(req.body, {
      where: { id: cryptoId },
      returning: true
    })
    res.send(cryptoBody)
  } catch (error) {
    throw error
  }
}

const deleteCrypto = async (req, res) => {
  try {
    let cryptoId = parseInt(req.params.cryptoId)
    await Crypto.destroy({ where: { id: cryptoId } })
    res.send({ message: `Deleted crypto with an id of ${cryptoId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllCryptos,
  findCryptosByUser,
  createCrypto,
  updateCrypto,
  deleteCrypto
}
