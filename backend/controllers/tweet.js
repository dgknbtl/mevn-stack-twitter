const {UserService, TweetService} = require('../services')

module.exports = {
   createTweet,
   removeTweet,
}

// create a new tweet
async function createTweet(req, res) {
   let messages = []
   const {content} = req.body
   if (!content) messages.push({body: 'Tweet message is required!'})
   if (!req.user) messages.push({body: 'Tweet message is required.'})
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
