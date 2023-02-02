let recipes = require(`../db/initData`);

const mutation = {
  // adding recipe
  addRecipe: async (
    {
      recipeName,
      localName,
      origin,
      cookTime,
      ingredients,
      recommendedVideo,
      category,
    },
    context
  ) => {
    const recipe = {
      id: `${recipes.length + 1}`,
      recipeName,
      localName,
      origin,
      cookTime,
      ingredients,
      recommendedVideo,
      category,
    };
    recipes.push(recipe);
    return {
      data: recipe,
      ok: true,
      error: ``,
    };
  },

  // updating recipe
  updateRecipe: async (
    {
      id,
      recipeName,
      localName,
      origin,
      cookTime,
      ingredients,
      recommendedVideo,
      category,
    },
    context
  ) => {
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (!recipe) {
      return {
        data: null,
        ok: false,
        error: `Recipe not found`,
      };
    }
    if (recipeName) recipe.recipeName = recipeName;
    if (localName) recipe.localName = localName;
    if (origin) recipe.origin = origin;
    if (cookTime) recipe.cookTime = cookTime;
    if (ingredients) recipe.ingredients = ingredients;
    if (recommendedVideo) recipe.recommendedVideo = recommendedVideo;
    if (category) recipe.category = category;
    recipes = recipes.map((r) => (r.id === id ? recipe : r));
    return {
      data: recipe,
      ok: true,
      error: ``,
    };
  },

  // deleting recipe
  deleteRecipe: async ({ id }, context) => {
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (!recipe) {
      return {
        data: null,
        ok: false,
        error: `Recipe not found`,
      };
    }
    recipes = recipes.filter((recipe) => recipe.id === id);
    return {
      data: recipe,
      ok: true,
      error: ``,
    };
  },
};

module.exports = mutation;
