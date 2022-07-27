require('dotenv').config()
const config = {
   dbUrl: process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongodb/twitter-web-clone',
   port: process.env.PORT || 3000,
   sessionSecret: process.env.SESSION_SECRET,
}

module.exports = config
