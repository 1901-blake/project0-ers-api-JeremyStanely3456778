import express from 'express';
import { User } from '../models/user';
import { users } from '../data';
import { authmiddleware } from '../middleware/auth.middleware';

export const userrouter = express.Router();

userrouter.get('', (req, res) => {
  res.json(users);

    });

userrouter.get('/:id', (req, res) => {
    const userid = +req.params.id;
  const user = users.find( ele => ele.userId === userid);
  res.json(user);

    });

// To update the user UserID must be present
userrouter.patch('', (req, res) => {
  const user = users.find( ele => ele.userId === req.body.userId);

  if (user) {

        const props: string[] = Object.keys(user);
        props.forEach( prop => {
    if (req.body[prop]) {
        user[prop] = req.body[prop];
        }
        });

    res.send(user);
}
    });
