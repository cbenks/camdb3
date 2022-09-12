const Router = require('express').Router()
const controller = require('../controllers/crypto')
const middleware = require('../middleware')

Router.get('/all', controller.findAllCryptos)
Router.get('/:userId', controller.findCryptosByUser)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createComment
)
Router.put(
  '/:cryptoId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateComment
)
Router.delete(
  '/:cryptoId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteComment
)

module.exports = Router
