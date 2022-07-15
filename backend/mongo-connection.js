const mongoose = require('mongoose')
const config = require('./config')

mongoose
   .connect(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log(`connected to  ${config.dbUrl}`))
   .catch((err) => console.error(err))

module.exports = {mongoose}
