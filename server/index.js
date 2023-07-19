const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const app = express();

const { userRouter } = require('./routes/userRoute');
const { recipeRouter } = require('./routes/recipeRoute');
const { recipeModel, recipeSchema } = require('./models/recipeModel');

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');

app.use(cors({origin:'*',exposedHeaders: 'authorization'}));

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

app.get('/', async (req, res, next) => {
  await recipeModel.find({}, (recipes, err) => {
    if (err) res.send(err);
    res.send(recipes);
  });
});

app.use('/auth', userRouter);

app.use('/recipe', recipeRouter);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
