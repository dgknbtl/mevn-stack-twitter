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

      return tweet
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

      return tweet
   }

   // retweet
   async reTweet(user, originalTweet, content = '') {
      const retweet = await TweetService.insert({
         author: user,
         content,
      })

      retweet.originalTweet = originalTweet

      user.tweets.push(retweet)
      originalTweet.retweets.push(retweet)

      await retweet.save()
      await originalTweet.save()
      await user.save()
   }

   // unretweet
   async unRetweet(user, tweet) {
      const originalTweet = await TweetService.find(tweet.originalTweet.id)
      const filteredUserTweets = user.tweets.filter((t) => t.id !== tweet.id)

      const filteredTweetRetweets = originalTweet.retweets.filter(
         (t) => t._id != tweet.id
      )

      user.tweets = filteredUserTweets
      originalTweet.retweets = filteredTweetRetweets

      await tweet.save()
      await originalTweet.save()
      await user.save()

      await TweetService.removeOne('_id', tweet.id)
   }

   // unretweet
   // async unRetweet(user, tweetId) {
   //    const tweet = await TweetService.find(tweetId)

   //    const filteredUserRetweets = await user.retweets.filter(
   //       (t) => t.id !== tweet.originalTweet.id
   //    )
   //    const filteredUserTweets = await user.tweets.filter((t) => t.id !== tweet.id)
   //    const filteredTweetRetweets = await tweet.retweets.filter((t) => t.id !== tweet.id)

   //    user.retweets = filteredUserRetweets
   //    user.tweets = filteredUserTweets
   //    tweet.retweets = filteredTweetRetweets

   //    await user.save()
   //    await tweet.save()

   //    return await TweetService.removeOne('_id', tweet.id)
   // }

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
