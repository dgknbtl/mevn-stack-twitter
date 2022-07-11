const router = require('express').Router()
const {TweetController} = require('../controllers')
const {loggedIn} = require('../middlewares/auth')

router.post('/new', loggedIn, TweetController.createTweet)

router.delete('/:tweetId', loggedIn, TweetController.removeTweet)

router.patch('/:tweetId/like', loggedIn, TweetController.likeTweet)

module.exports = router
