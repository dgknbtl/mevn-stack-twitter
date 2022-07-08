const MongooseService = require('./mongoose-service')
const TweetService = require('./tweet-service')
const UserModel = require('../models/user')

class UserService extends MongooseService {}

module.exports = new UserService(UserModel)
