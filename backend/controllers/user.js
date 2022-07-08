const {UserService} = require('../services')
const passport = require('passport')

module.exports = {
   createUser,
   authenticateUser,
   logout,
}

// create a new user
async function createUser(req, res, next) {
   let messages = []
   try {
      const {name, email, password, confirmPassword} = req.body
      console.log(req.body)
      if (!(name && email && password && confirmPassword)) {
         messages.push({body: 'All fields is required.'})
      }
      if (password != confirmPassword) {
         messages.push({body: 'Password do not match.'})
      }

      if (password.length < 6) {
         messages.push({body: 'Password must be at least 6 characters.'})
      }

      if (messages.length) {
         return res.send({messages})
      }

      const user = await UserService.findBy('email', email)
      if (!user.length) {
         await UserService.insert(req.body)
         return res
            .send('You are registered successfully and can now log in.')
            .status(200)
      }
      messages.push({body: 'This email is already in use.'})
      return res.send({messages})
   } catch (err) {
      return res.status(500).send(err.message)
   }
}

// authenticate a user
async function authenticateUser(req, res, next) {
   passport.authenticate('local', function (err, user, info) {
      if (err) {
         return next(err)
      }
      if (!user) {
         return res.send({message: info.message})
      }
      req.logIn(user, function (err) {
         if (err) {
            return next(err)
         }
         return res.send(req.user)
      })
   })(req, res, next)
}

// logout the user
async function logout(req, res) {
   req.logout()
   res.status(200).send(`You are logged out.`)
}
