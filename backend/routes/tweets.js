const router = require('express').Router()
const {TweetController} = require('../controllers')
const {loggedIn} = require('../middlewares/auth')

router.get('/', loggedIn, TweetController.getAllTweets)

router.get('/:tweetId', loggedIn, TweetController.getTweet)

router.post('/new', loggedIn, TweetController.createTweet)

router.delete('/:tweetId', loggedIn, TweetController.removeTweet)

router.patch('/:tweetId/like', loggedIn, TweetController.likeTweet)

router.patch('/:tweetId/unlike', loggedIn, TweetController.unlikeTweet)

router.patch('/:tweetId/retweet', loggedIn, TweetController.reTweet)

module.exports = router
