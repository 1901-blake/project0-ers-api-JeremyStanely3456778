import express from 'express';
import { users } from '../data';
import { User } from '../models/user';

export const authrouter = express.Router();

// sees if the user is actually real and puts them in variable
authrouter.post('/login', (req, res) =>  {
  const user: User = users.find( ele =>   {

    return req.body.username === ele.username;
    });
// if user is actually real examine password of request matchings
  if (user) {
    if ( req.body.password === user.password ) {

      req.session.user = user;
      res.json(user);
     }
}

  // if the user is not real or not correct have the computer to return 400
  res.status(400).json({ message: 'Your Credentials are not valid!'});
  });