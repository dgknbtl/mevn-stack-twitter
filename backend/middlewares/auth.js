const httpStatus = require('http-status')

module.exports = {
   loggedIn(req, res, next) {
      if (req.isAuthenticated()) {
         return next()
      }
      res.status(httpStatus.UNAUTHORIZED).send({message: 'Please log in!'})
   },
   forwardAuthenticated(req, res, next) {
      if (!req.isAuthenticated()) {
         return next()
      }
   },
}
