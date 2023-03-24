import passport from 'passport';
import passportLocal from 'passport-local';
import { findUserByUsername, validatePassword } from './db';

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser(function (user, cb) {
  // persist the username into session
  cb(null, user)
});

passport.deserializeUser(function (req: any, id: any, cb: any) {
  // deserialize the username back into user object
  const user = findUserByUsername(req, id)
  cb(null, user)
});

/** 
 * Sign in user Username and Password 
 */
passport.use(new LocalStrategy(
    { passReqToCallback: true },
    function verify(req, username, password, cb) {
      // Lookup the user in the DB and compare the password/hashed password
      const user = findUserByUsername(req, username);
      if (!user){
        return cb(null, false, { message: 'Username ${user} not found'});
      }
      if (!validatePassword(user, password)) {
        return cb(null, false, { message: "Invalid username or password"});
      } else {
        return cb(null, user)
      }
    }
));

export default passport