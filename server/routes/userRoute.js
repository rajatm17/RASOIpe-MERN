const express = require('express');
const { userModel } = require('../models/userModel');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const BearerToken = req.headers['authorization'];
  if (!BearerToken) return res.status(401).send('Access denied');
  const token = BearerToken.split(' ')[1];
  jwt.verify(token, 'secret', (err, data) => {
    if (err) return res.status(401).send('Access denied');
    req.user = data;
    req.token = token;
    next();
  });
};

userRouter.post('/signup', async (req, res) => {
  // logic to sign up admin
  const User = {
    email: req.body.email,
    password: req.body.password,
  };

  const user = new userModel({
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.send(user);

  // jwt.sign(User, 'secret', async (err, token) => {
  //   if (err) return res.json(err);
  //   else {
  //     res.json({
  //       message: `Welcome ${User.email}!`,
  //       token: token,
  //     });
  //     const user = new userModel({
  //       email: req.body.email,
  //       password: req.body.password,
  //       jwt_token: token,
  //     });
  //     await user.save();
  //   }
  // });
});

userRouter.post('/login', async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const getuser = await userModel.findOne({ email: email });
  if (!getuser) res.send('user not found');
  res.send({ token: jwt.sign({ getuser }, 'secret'), user: getuser });
  // jwt.sign(getuser, 'secret', (err, token) => {
  //   console.log(token);
  //   res.send({
  //     message: 'user logged in succefully',
  //     token: token,
  //     user: getuser,
  //   });
  // });
});

module.exports = { userRouter };
