const MongooseService = require('./mongoose-service')
const TweetModel = require('../models/tweet')

class TweetService extends MongooseService {}

module.exports = new TweetService(TweetModel)
