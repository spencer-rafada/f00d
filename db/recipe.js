const { Schema, model } = require(`mongoose`);

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
  },
  localName: String,
  origin: {
    type: String,
    required: true,
  },
  cookTime: {
    type: Number,
    required: true,
  },
  ingredients: [{ type: String }],
  recommendedVideo: [{ type: String }],
  category: {
    type: String,
    required: true,
  },
});

module.exports = new model(`Recipe`, recipeSchema);
