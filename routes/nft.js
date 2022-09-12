const Router = require('express').Router()
const controller = require('../controllers/nft')
const middleware = require('../middleware')

Router.get('/all', controller.findAllNfts)
Router.get('/:userId', controller.findNftsByUser)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createComment
)
Router.put(
  '/:nftId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateComment
)
Router.delete(
  '/:nftId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteComment
)

module.exports = Router
