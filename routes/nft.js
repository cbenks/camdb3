const Router = require('express').Router()
const controller = require('../controllers/nft')
const middleware = require('../middleware')

Router.get('/all', controller.findAllNfts)
Router.get('/:userId', controller.findNftsByUser)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createNft
)
Router.put(
  '/:nftId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateNft
)
Router.delete(
  '/:nftId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteNft
)

module.exports = Router
