const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructions: { type: String, required: true },
  ingredients: { type: Array, required: true, default: [] },
  imageUrl: { type: String, required: true },
  timeToCook: { type: Number, required: true },
});

const recipeModel = new mongoose.model('recipes', recipeSchema);

module.exports = recipeModel;

//     "title": "Recipe",
//     "description":"tasty recipe",
//     "ingredients": ["something"],
//     "imageurl":"kuch kuch",
//     "timeToCook":"30"
