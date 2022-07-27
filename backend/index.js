const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const tweetRouter = require('./routes/tweets')

const config = require('./config/index')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const passportConfig = require('./config/passport')
const cors = require('cors')
const MongoStore = require('connect-mongo')(session)
const {mongoose} = require('./mongo-connection')

app.set('trust proxy', 1)

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*')
   next()
})

// passport config
passportConfig(passport)

// express session
app.use(cookieParser())
app.use(
   session({
      secret: config.sessionSecret,
      cookie: {
         sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
         secure: process.env.NODE_ENV === 'production',
         maxAge: 14 * 24 * 60 * 60 * 1000,
      },
      resave: true,
      saveUninitialized: false,
      store: new MongoStore({mongooseConnection: mongoose.connection, stringify: false}),
   })
)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use((req, res, next) => {
   res.locals.success_message = req.flash('success_message')
   res.locals.error_message = req.flash('error_message')
   res.locals.error = req.flash('error')
   next()
})

app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
   cors({
      origin: function (origin, callback) {
         if (corsWhitelist.indexOf(origin) !== -1) {
            callback(null, true)
         } else {
            callback(new Error('Not allowed by CORS - ' + origin))
         }
      },
      origin: process.env.FRONTEND_URL || 'http://localhost:8080',
      credentials: true,
   })
)

app.use(methodOverride('_method'))
app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/tweets', tweetRouter)

module.exports = app
