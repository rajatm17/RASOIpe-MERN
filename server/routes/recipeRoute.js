const express = require('express');
const recipeRouter = express.Router();
const jwt = require('jsonwebtoken');
const recipeModel = require('../models/recipeModel');
const { userModel } = require('../models/userModel');

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

recipeRouter.get('/', async (req, res, next) => {
  const recipes = await recipeModel.find({});
  res.send(recipes);
});

recipeRouter.get('/:recipeId', authenticateUser, async (req, res, next) => {
  const recipeId = req.params.recipeId;
  const recipe = await recipeModel.findOne({ _id: recipeId });
  if (!recipe) res.send('No recipe found');
  res.send(recipe);
  // await recipeModel.findOne({ recipeId: recipeId }, (err, recipe) => {
  //   if (err) res.send(err);
  //   res.send(recipe);
  // });
});

recipeRouter.post('/compose', authenticateUser, async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const instructions = req.body.instructions;
  const ingredients = req.body.ingredients;
  const timeToCook = req.body.timeToCook;
  const imageUrl = req.body.imageUrl;

  if (!title || !description || !ingredients || !timeToCook || !imageUrl) {
    res.send('No title or description');
  }
  const recipe = new recipeModel({
    title: title,
    description: description,
    instructions: instructions,
    ingredients: ingredients,
    imageUrl: imageUrl,
    timeToCook: timeToCook,
  });
  await recipe.save();
  res.send(recipe);
});

recipeRouter.put('/', async (req, res, next) => {
  const recipeId = req.body.recipeId;
  const userId = req.body.userId;
  const recipe = await recipeModel.findById(recipeId);
  const user = await userModel.findById(userId);
  user.recipes.push(recipe);
  await user.save();
  res.send({ savedRecipes: user.recipes });
});

recipeRouter.get('/savedRecipes/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const user = await userModel.findById(userId);
  const savedRecipes = await recipeModel.find({ _id: { $in: user.recipes } });

  res.send(savedRecipes);
});

module.exports = { recipeRouter };
