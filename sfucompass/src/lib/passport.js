import passport from 'passport'
import LocalStrategy from 'passport-local'
import { findUserByUsername, validatePassword } from './db'

passport.serializeUser(function (user, cb) {
  // persist the username into session
  cb(null, user.username)
})

passport.deserializeUser(function (req, id, cb) {
  // deserialize the username back into user object
  const user = findUserByUsername(req, id)
  cb(null, user)
})

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    function verify(req, username, password, cb) {
      // Lookup the user in the DB and compare the password/hashed password
      const user = findUserByUsername(req, username)
      // Security-wise, if you hashed the password earlier, you must verify it
      // if (!user || await argon2.verify(user.password, password))
      if (!user || !validatePassword(user, password)) {
        cb(null, null)
      } else {
        cb(null, user)
      }
    }
  )
)

export default passport