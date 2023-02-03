const recipe = require("../recipe");
const RecipeModel = require(`../recipe`);

const getAllRecipes = async (limit) => {
  return await RecipeModel.find({}).limit(limit);
};

const getRecipeById = async (id) => {
  return await RecipeModel.findById(id);
};

const createRecipe = async ({
  recipeName,
  localName,
  origin,
  cookTime,
  ingredients,
  recommendedVideo,
  category,
}) => {
  return await RecipeModel.create({
    recipeName,
    localName,
    origin,
    cookTime,
    ingredients,
    recommendedVideo,
    category,
  });
};

const updateRecipe = async (
  id,
  {
    recipeName,
    localName,
    origin,
    cookTime,
    ingredients,
    recommendedVideo,
    category,
  }
) => {
  const set = {};
  if (recipeName) set.recipeName = recipeName;
  if (localName) set.localName = localName;
  if (origin) set.origin = origin;
  if (cookTime) set.cookTime = cookTime;
  if (ingredients) set.ingredients = ingredients;
  if (recommendedVideo) set.recommendedVideo = recommendedVideo;
  if (category) set.category = category;

  return await RecipeModel.findByIdAndUpdate(id, set);
};

const deleteRecipe = async (id) => {
  return await RecipeModel.findByIdAndDelete(id);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
