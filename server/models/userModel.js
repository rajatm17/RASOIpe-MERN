const mongoose = require('mongoose');
// const { recipeModel, recipeSchema } = require('../models/recipeModel');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, requird: true },
  recipes: [{ type: mongoose.Types.ObjectId, ref: 'recipeModel' }],
});

const userModel = mongoose.model('User', userSchema);

//named exports
module.exports = { userSchema, userModel };
