const {UserService, TweetService} = require('../services')

module.exports = {
   createTweet,
   removeTweet,
   likeTweet,
   unlikeTweet,
   reTweet,
   getTweet,
   getAllTweets,
}

// create a new tweet
async function createTweet(req, res) {
   let messages = []
   const {content} = req.body
   if (!content) messages.push({body: 'Tweet message is required!'})
   if (!req.user) messages.push({body: 'Author is required'})
   if (content.length > 140)
      messages.push({body: 'Tweet message should not be more than 140 characters.'})

   if (messages.length) return res.send({messages})

   const tweet = await UserService.newTweet(req.user, content)
   return res.send(tweet)
}

// remove a tweet
async function removeTweet(req, res) {
   try {
      const tweet = await TweetService.find(req.params.tweetId)
      if (!tweet) return res.send({message: 'Tweet is not found'})

      await UserService.removeTweet(req.user, tweet._id)
      res.send({message: 'Tweet was removed.'})
   } catch (error) {
      res.status(404).send(`Tweet is not found!, ${error}`)
   }
}

// like a tweet
async function likeTweet(req, res) {
   try {
      const tweet = await TweetService.find(req.params.tweetId)

      if (!tweet) return res.send({message: 'Tweet is not found'})
      if (req.user.likes.some((t) => t.id == tweet._id))
         return res.send('Tweet already liked')

      const likeTweet = await UserService.likeTweet(req.user, tweet._id)
      return res.send(likeTweet)
   } catch (error) {
      res.status(404).send(`Tweet is not found!, ${error}`)
   }
}

// like a tweet
async function unlikeTweet(req, res) {
   try {
      const tweet = await TweetService.find(req.params.tweetId)

      if (!tweet) return res.send({message: 'Tweet is not found'})

      const unlikeTweet = await UserService.unlikeTweet(req.user, tweet._id)
      return res.send(unlikeTweet)
   } catch (error) {
      res.status(404).send(`Tweet is not found!, ${error}`)
   }
}

// retweet
async function reTweet(req, res) {
   try {
      let messages = []
      const {content} = req.body

      const tweet = await TweetService.find(req.params.tweetId)

      if (!tweet) return res.send({message: 'Tweet is not found'})

      if (req.user.retweets.some((t) => t.id == tweet._id))
         return res.send({message: 'Tweet has already been retweeted.'})

      if (messages.length) return res.send({messages})

      const retweet = await UserService.reTweet(req.user, tweet._id, content)

      return res.status(200).send(retweet)
   } catch (error) {
      res.status(404).send(`Error!, ${error}`)
   }
}

// get a tweet
async function getTweet(req, res) {
   const tweet = await TweetService.find(req.params.tweetId)

   if (!tweet) return res.send({message: 'Tweet is not found'})

   res.send(tweet)
}

// get all tweets
async function getAllTweets(req, res) {
   if (!req.user) return res.status(401).send({message: 'Please log in!'})
   return res.status(200).send(await TweetService.load())
}
