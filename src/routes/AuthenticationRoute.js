import express from 'express';
import User from '../models/patientContactModel';
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwt from 'jwt-simple';
require('dotenv').config();

require('../services/passport');

const authRouter = express.Router();

authRouter.post('../pages/patientSignUpForm', (request, response, next) => {
  const {userName, passWord} = request.body;

  if (!userName || !passWord) {
    return response.status(422)
    .json({error: 'username and password required' });
  }

  User.findOne({ userName }).exec()
  //eslint-disable-next-line
    .then((existingUser) => {
      if (existingUser) {
        return response.status(422).json({ error: 'Username is in use' });
      }



      bcrypt.hash(passWord, 10, (err, hashedPassword) => {
        if (err) {
          return next(err);
        }

        const user = new User({ userName, passWord: hashedPassword });

        user.save()
          .then(response.json(user));
      });
    })
    .catch(err => next(err));
});

const signinStrategy = passport.authenticate('signinStrategy', { session: false });

function tokenForUser(user) {

  const timeStamp = new Date().getTime();
  return jwt.encode({ userID: user.id, iat: timeStamp}, process.env.SECRET);
}

authRouter.post('/api/signup', signinStrategy, (request, response) => {
  response.json({ token: tokenForUser(request.user)});
});


authRouter.post('/pages/signInPage', (request, response) => {
  response.json({message: 'welcome'});
});




export default authRouter;
