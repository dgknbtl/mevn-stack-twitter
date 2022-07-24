const {UserService} = require('../services')
const passport = require('passport')
const httpStatus = require('http-status')

module.exports = {
   createUser,
   authenticateUser,
   logout,
   follow,
   unFollow,
   getUser,
}

// create a new user
async function createUser(req, res, next) {
   let messages = []
   try {
      const {name, handle, email, password, confirmPassword} = req.body
      if (!(name && handle && email && password && confirmPassword)) {
         messages.push({body: 'All fields is required.'})
      }
      if (password != confirmPassword) {
         messages.push({body: 'Password do not match.'})
      }

      if (password.length < 6) {
         messages.push({body: 'Password must be at least 6 characters.'})
      }

      if (messages.length) {
         return res.status(httpStatus.BAD_REQUEST).send(messages)
      }

      const user = await UserService.findBy('email', email)
      if (!user.length) {
         await UserService.insert(req.body)
         return res.status(httpStatus.CREATED).send(user)
      }
      messages.push({body: 'This email is already in use.'})
      return res.status(httpStatus.BAD_REQUEST).send(messages)
   } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
   }
}

// authenticate a user
async function authenticateUser(req, res, next) {
   passport.authenticate('local', function (err, user, info) {
      if (err) {
         return next(err)
      }
      if (!user) {
         return res.status(httpStatus.BAD_REQUEST).send({message: info.message})
      }
      req.logIn(user, function (err) {
         if (err) {
            return next(err)
         }
         res.status(httpStatus.OK).send(req.user)
      })
   })(req, res, next)
}

// logout the user
async function logout(req, res) {
   req.logout()
   res.status(httpStatus.OK).send({message: `You are logged out.`})
}

// follow a user
async function follow(req, res) {
   try {
      const userToFollow = await UserService.find(req.params.userId)

      if (!userToFollow || !req.user)
         return res.status(httpStatus.NOT_FOUND).send({message: 'The user not found.'})
      if (req.user.following.some((u) => u.id == userToFollow._id))
         return res.send({message: `You are already following ${userToFollow.name}`})

      res.status(httpStatus.OK).send(await UserService.follow(req.user, userToFollow))
   } catch (error) {
      res.status(httpStatus.NOT_FOUND).send(`The user not found!, ${error}`)
   }
}

// unfollow a user
async function unFollow(req, res) {
   try {
      const userToUnFollow = await UserService.find(req.params.userId)

      if (!userToUnFollow || !req.user) return res.send({message: 'The user not found.'})
      // if (req.user.following.some((u) => u.id == userToUnFollow._id))
      //    return res.send({message: `You are already following ${userToUnFollow.name}`})
      res.status(httpStatus.OK).send(await UserService.unfollow(req.user, userToUnFollow))
   } catch (error) {
      res.status(httpStatus.NOT_FOUND).send(`The user not found!, ${error}`)
   }
}

async function getUser(req, res) {
   const user = await UserService.findOne('handle', req.params.handle)

   if (!user)
      return res.status(httpStatus.NOT_FOUND).send({message: 'The user was not found!'})

   return res.status(httpStatus.OK).send(user)
}
