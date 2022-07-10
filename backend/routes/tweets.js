const router = require('express').Router()
const {TweetController} = require('../controllers')
const {loggedIn} = require('../middlewares/auth')

router.post('/new', loggedIn, TweetController.createTweet)

module.exports = router
