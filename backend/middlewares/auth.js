module.exports = {
   loggedIn(req, res, next) {
      if (req.isAuthenticated()) {
         return next()
      }
      res.status(401).send({message: 'Please log in!'})
   },
   forwardAuthenticated(req, res, next) {
      if (!req.isAuthenticated()) {
         return next()
      }
   },
}
