const { Nft, User } = require('../models')

const findAllNfts = async (req, res) => {
  try {
    let cryptos = await Nft.findAll()
    res.send(cryptos)
  } catch (error) {
    throw error
  }
}

const findNftsByUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let nfts = await Nft.findAll({
      where: { userId: userId },
      include: [{ model: User }]
    })
    res.send(nfts)
  } catch (error) {
    throw error
  }
}

const createNft = async (req, res) => {
  try {
    let userId = parseInt(req.body.userId)
    let nft = await Nft.create({
      ...req.body,
      userId
    })
    res.send(nft)
  } catch (error) {
    throw error
  }
}

const updateNft = async (req, res) => {
  try {
    let nftId = parseInt(req.params.commentId)
    let nftBody = await Nft.update(req.body, {
      where: { id: nftId },
      returning: true
    })
    res.send(nftBody)
  } catch (error) {
    throw error
  }
}

const deleteNft = async (req, res) => {
  try {
    let nftId = parseInt(req.params.nftId)
    await Nft.destroy({ where: { id: nftId } })
    res.send({ message: `Deleted nft with an id of ${nftId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAllNfts,
  findNftsByUser,
  createNft,
  updateNft,
  deleteNft
}
