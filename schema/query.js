const recipesData = require(`../db/initData`);

const query = {
  recipes: async ({ limit }, context) => {
    return limit ? recipesData.slice(0, limit) : recipesData;
  },
  recipe: async ({ id }, context) => {
    return recipesData.find((recipe) => recipe.id === id);
  },
};

module.exports = query;
