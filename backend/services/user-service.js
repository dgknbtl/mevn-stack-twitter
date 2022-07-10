const MongooseService = require('./mongoose-service')
const TweetService = require('./tweet-service')
const UserModel = require('../models/user')

class UserService extends MongooseService {
   async newTweet(user, tweetContent) {
      const tweet = await TweetService.insert({
         author: user,
         content: tweetContent,
      })
      user.tweets.push(tweet)
      await user.save()
      return tweet
   }
}

module.exports = new UserService(UserModel)
