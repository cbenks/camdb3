const Router = require('express').Router()
const UserRouter = require('./user')
const cryptoRouter = require('./crypto')
const nftRouter = require('./nft')
const authRouter = require('./auth')

Router.use('/users', UserRouter)
Router.use('/cryptos', cryptoRouter)
Router.use('/nfts', nftRouter)
Router.use('/auth', authRouter)

module.exports = Router
