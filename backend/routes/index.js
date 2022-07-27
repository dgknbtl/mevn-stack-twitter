const router = require('express').Router()
const {loggedIn} = require('../middlewares/auth')

router.get('/', (req, res) => {
   res.send('Hello World')
})

router.get('/dashboard', loggedIn, (req, res) => {
   res.send('dashboard')
})

module.exports = router
