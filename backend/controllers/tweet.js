const {UserService, TweetService} = require('../services')
const httpStatus = require('http-status')

module.exports = {
   createTweet,
   removeTweet,
   likeTweet,
   unlikeTweet,
   reTweet,
   unRetweet,
   getTweet,
   getAllTweets,
}

// create a new tweet
async function createTweet(req, res) {
   try {
      let messages = []
      const {content} = req.body
      if (!content) messages.push({body: 'Tweet message is required!'})
      if (!req.user) messages.push({body: 'Author is required'})
      if (content.length > 140)
         messages.push({body: 'Tweet message should not be more than 140 characters.'})

      if (messages.length) return res.status(httpStatus.BAD_REQUEST).send({messages})

      const tweet = await UserService.newTweet(req.user, content)
      return res.status(httpStatus.CREATED).send(tweet)
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// remove a tweet
async function removeTweet(req, res) {
   try {
      const tweet = await TweetService.find(req.params.tweetId)
      if (!tweet)
         return res.status(httpStatus.NOT_FOUND).send({message: 'Tweet is not found'})

      await UserService.removeTweet(req.user, tweet._id)
      res.status(httpStatus.OK)
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// like a tweet
async function likeTweet(req, res) {
   try {
      const tweet = await TweetService.find(req.params.tweetId)

      if (!tweet)
         return res.status(httpStatus.NOT_FOUND).send({message: 'Tweet is not found'})
      if (req.user.likes.some((t) => t.id == tweet._id))
         return res.send('Tweet already liked')

      const likeTweet = await UserService.likeTweet(req.user, tweet._id)
      return res.status(httpStatus.OK).send(likeTweet)
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// like a tweet
async function unlikeTweet(req, res) {
   try {
      const tweet = await TweetService.find(req.params.tweetId)

      if (!tweet)
         return res.status(httpStatus.NOT_FOUND).send({message: 'Tweet is not found'})

      const unlikeTweet = await UserService.unlikeTweet(req.user, tweet._id)
      return res.status(httpStatus.OK).send(unlikeTweet)
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// retweet
async function reTweet(req, res) {
   try {
      let messages = []
      const {content} = req.body

      const originalTweet = await TweetService.find(req.params.tweetId)
      const tweet = await UserService.reTweet(req.user, originalTweet, content)

      // return res.status(httpStatus.CREATED).send(tweet)
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// unretweet
async function unRetweet(req, res) {
   try {
      const originalTweet = await TweetService.find(req.params.tweetId)
      const tweet = await UserService.unRetweet(req.user, originalTweet)

      return res.status(httpStatus.CREATED).send(tweet)
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// get a tweet
async function getTweet(req, res) {
   try {
      const tweet = await TweetService.find(req.params.tweetId)

      if (!tweet)
         return res.status(httpStatus.NOT_FOUND).send({message: 'Tweet is not found'})

      res.status(httpStatus.OK).send(tweet)
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// get all tweets
async function getAllTweets(req, res) {
   try {
      if (!req.user)
         return res.status(httpStatus.UNAUTHORIZED).send({message: 'Please log in!'})
      return res.status(httpStatus.OK).send(await TweetService.load())
   } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}
