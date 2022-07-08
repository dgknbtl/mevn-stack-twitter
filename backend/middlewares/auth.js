module.exports = {
   loggedIn(req, res, next) {
      if (req.isAuthenticated()) {
         return next()
      }
      res.send('Please log in!')
   },
   forwardAuthenticated(req, res, next) {
      if (!req.isAuthenticated()) {
         return next()
      }
   },

   // loggedIn(req, res, next) {
   //    if (req.user) {
   //       next()
   //    } else {
   //       res.send('You are not logged in. Please log in.')
   //    }
   // },
}
