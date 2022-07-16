const router = require('express').Router()
const {UserController} = require('../controllers')
const {loggedIn} = require('../middlewares/auth')

router.get('/', (req, res) => res.send('Users'))

// check logged in
router.get('/login', loggedIn, (req, res) => {
   res.status(200).send(req.user)
})

// authenticate
router.post('/login', UserController.authenticateUser)

// create a new user
router.post('/register', UserController.createUser)

// logout
router.get('/logout', UserController.logout)

// follow a user
router.get('/:userId/follow', UserController.follow)

// unfollow a user
router.get('/:userId/unfollow', UserController.unFollow)

// get a user
router.get('/:handle', UserController.getUser)

module.exports = router
