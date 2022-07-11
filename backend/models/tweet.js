const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema(
   {
      createdAt: Date,
      content: {
         type: String,
         minlength: 1,
         required: true,
      },
      author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true,
         autopopulate: {
            maxDepth: 1,
         },
      },
      originalTweet: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            autopopulate: {
               maxDepth: 2,
            },
         },
      ],
      replies: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            autopopulate: {
               maxDepth: 2,
            },
         },
      ],
      likes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: {
               maxDepth: 2,
            },
         },
      ],
      retweets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            autopopulate: {
               maxDepth: 2,
            },
         },
      ],
      quoteTweets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
            autopopulate: {
               maxDepth: 2,
            },
         },
      ],
   },
   {timestamps: true}
)

TweetSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Tweet', TweetSchema)
