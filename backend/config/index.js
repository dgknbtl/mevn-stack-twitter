require('dotenv').config()
const config = {
   dbUrl: process.env.DB_URL || 'mongodb://localhost/twitter-web-clone',
   port: process.env.PORT || 3000,
}

module.exports = config