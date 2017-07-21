import express from 'express';
import User from '../models/Users';
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwt from 'jwt-simple';

require('../services/passport');

const authRouter = express.Router();

authRouter.post('api/signup', (request, response, next) => {
  const {username, password} = request.body;

  if (!username || !password) {
    return response.status(422)
    .json({error: 'username and password required' });
  }

  User.findOne({ username }).exec()
  //eslint-disable-next-line
    .then((existingUser) => {
      if (existingUser) {
        return response.status(422).json({ error: 'Username is in use' });
      }


      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return next(err);
        }

        const user = new User({ username, password: hashedPassword });

        user.save()
          .then(response.json(user));
      });
    })
    .catch(err => next(err));
});

const signinStrategy = passport.authenticate('signinStrategy', { session: false });

function tokenForUser(user) {

  const timeStamp = new Date().getTime();
  return jwt.encode({ userID: user.id, iat: timeStamp}, '1234');
}

authRouter.post('/api/signin', signinStrategy, (request, response) => {
  response.json({ token: tokenForUser(request.user)});
});


authRouter.post('/signup', (request, response) => {
  response.json({message: 'welcome'});
});




export default authRouter;
