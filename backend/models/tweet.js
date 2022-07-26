const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema(
   {
      content: {
         type: String,
         // required: function () {
         //    return !this.originalTweet
         // },
      },
      author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true,
         autopopulate: {
            maxDepth: 3,
         },
      },
      originalTweet: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Tweet',
         autopopulate: {
            maxDepth: 2,
         },
      },
      replies: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: {
               maxDepth: 1,
            },
         },
      ],
      likes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: {
               maxDepth: 1,
            },
         },
      ],
      retweets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            // autopopulate: {
            //    maxDepth: 3,
            // },
         },
      ],
      quoteTweets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            autopopulate: {
               maxDepth: 1,
            },
         },
      ],
   },
   {timestamps: true}
)

TweetSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Tweet', TweetSchema)
