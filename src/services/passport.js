import bcrypt from 'bcrypt';
import passport from 'passport';
import User from '../models/Users';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const signInStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({ username }).exec()
  .then(user => {
    if (!user) {
      return done(null, false);
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return done(err, false);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
  .catch(err => done(err, false));
});

const jwtOptions = {
  secretOrKey: '1234',
  jwtFromRequest: ExtractJwt.fromHeader('Authorization')
};

const authStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.user.id, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use('authStrategy', authStrategy);
passport.use('signInStrategy', signInStrategy);
