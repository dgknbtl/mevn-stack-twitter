const {UserService, TweetService} = require('../services')
const Validator = require('async-validator').default

module.exports = {
   createTweet,
}

async function createTweet(req, res, next) {
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
