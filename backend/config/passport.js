const LocalStrategy = require('passport-local').Strategy
const {UserService} = require('../services')

module.exports = function (passport) {
   passport.use(
      new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
         const user = await UserService.findOne('email', email)
         try {
            if (!user) {
               return done(null, false, {
                  message: 'That email is not registered.',
               })
            }

            await user.comparePassword(password, function (err, isMatch) {
               if (err) done(err)
               if (!isMatch) {
                  return done(null, false, {message: 'Password incorrect'})
               }
               return done(null, user)
            })
         } catch (err) {
            throw new Error(err)
         }
      })
   )
   passport.serializeUser((user, done) => {
      done(null, user.id)
   })
   passport.deserializeUser(async (id, done) => {
      try {
         const user = await UserService.find(id)
         done(null, user)
      } catch (error) {
         done(error)
      }
   })
}
