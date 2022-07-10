module.exports = {
   loggedIn(req, res, next) {
      if (req.isAuthenticated()) {
         return next()
      }
      res.send({message: 'Please log in!'})
   },
   forwardAuthenticated(req, res, next) {
      if (!req.isAuthenticated()) {
         return next()
      }
   },
}
