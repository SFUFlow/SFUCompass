import nextConnect from 'next-connect'
import passport from './passport'
import session from './session'

// middleware to route passport.js to next.js
const auth = nextConnect()
  .use(
    session({
      name: 'session',
      secret: process.env.local.AUTH0_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV != 'production',
        path: '/',
        sameSite: 'lax',
      },
    })
  )
  .use((req, res, next) => {
    // Initialize mocked database
    // [insert code here]
    next()
  })
  .use(passport.initialize())
  .use(passport.session())

export default auth