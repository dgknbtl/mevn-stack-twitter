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

   async removeTweet(user, tweetId) {
      try {
         await TweetService.removeOne('_id', tweetId)
         const filteredTweets = await user.tweets.filter((tweet) => tweet.id != tweetId)
         user.tweets = filteredTweets
         await user.save()
      } catch (error) {
         throw new Error(error)
      }
   }
}

module.exports = new UserService(UserModel)
