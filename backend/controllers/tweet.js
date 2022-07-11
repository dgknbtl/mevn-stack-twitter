const {UserService, TweetService} = require('../services')

module.exports = {
   createTweet,
   removeTweet,
   likeTweet,
   reTweet,
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

   await UserService.newTweet(req.user, content)
   res.send({message: 'Tweet was created successfully.'})
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
      if (req.user.likes.some((tweet) => tweet.id == tweet._id))
         return res.send('Tweet already liked')

      await UserService.likeTweet(req.user, tweet._id)

      res.send({message: 'You liked the tweet.'})
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
      if (req.user.retweets.some((tweet) => tweet.id == tweet._id))
         return res.send('Tweet has already been retweeted.')

      if (!content) messages.push({body: 'Tweet message is required!'})
      if (content.length > 140)
         messages.push({body: 'Tweet message should not be more than 140 characters.'})

      if (messages.length) return res.send({messages})

      await UserService.reTweet(req.user, tweet._id, content)

      res.send({message: 'You retweeted.'})
   } catch (error) {
      res.status(404).send(`Tweet is not found!, ${error}`)
   }
}
