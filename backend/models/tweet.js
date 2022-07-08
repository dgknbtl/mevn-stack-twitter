const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
   content: {
      type: String,
      minlength: 1,
      maxlength: 140,
      required: true,
   },
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      autopopulate: {
         maxDepth: 2,
      },
   },
})

TweetSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Tweet', TweetSchema)
