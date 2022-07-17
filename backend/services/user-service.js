const MongooseService = require('./mongoose-service')
const TweetService = require('./tweet-service')
const UserModel = require('../models/user')

class UserService extends MongooseService {
   // new tweet
   async newTweet(user, tweetContent) {
      const tweet = await TweetService.insert({
         author: user,
         content: tweetContent,
      })
      user.tweets.push(tweet)
      await user.save()
      return tweet
   }

   // remove a tweet
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

   // like a tweet
   async likeTweet(user, tweetId) {
      const tweet = await TweetService.find(tweetId)

      user.likes.push(tweet)
      tweet.likes.push(user)

      await user.save()
      await tweet.save()
   }

   // unlike a tweet
   async unlikeTweet(user, tweetId) {
      const tweet = await TweetService.find(tweetId)

      const filteredUserLikes = await user.likes.filter((t) => t.id !== tweet.id)
      const filteredTweetLikes = await tweet.likes.filter((u) => u.id !== user.id)

      user.likes = filteredUserLikes
      tweet.likes = filteredTweetLikes

      await user.save()
      await tweet.save()
   }

   // retweet
   async reTweet(user, tweetId, content) {
      const retweet = await TweetService.insert({
         author: user,
         content: content,
      })

      const originalTweet = await TweetService.find(tweetId)
      retweet.originalTweet = originalTweet

      user.tweets.push(retweet)
      user.retweets.push(originalTweet)
      originalTweet.retweets.push(retweet)

      await retweet.save()
      await originalTweet.save()
      await user.save()
   }

   // follow a user
   async follow(user, userToFollow) {
      user.following.push(userToFollow._id)
      userToFollow.followers.push(user._id)

      await user.save()
      await userToFollow.save()
   }

   // unfollow a user
   async unfollow(user, userToUnFollow) {
      const filteredFollowing = await user.following.filter(
         (u) => u.id !== userToUnFollow.id
      )
      const filteredFollowers = await userToUnFollow.followers.filter(
         (u) => u.id !== user.id
      )

      user.following = filteredFollowing
      userToUnFollow.followers = filteredFollowers

      await user.save()
      await userToUnFollow.save()
   }
}

module.exports = new UserService(UserModel)
