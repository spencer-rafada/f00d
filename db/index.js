const db = require(`./connect`);
const RecipeModel = require(`./recipe`);
const recipes = require(`./controllers/recipeController`);

module.exports = {
  db,
  RecipeModel,
  recipes,
};
