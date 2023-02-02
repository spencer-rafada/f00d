const { buildSchema } = require(`graphql`);

const schema = buildSchema(`
  type Query {
    recipes(limit: Int) : [Recipe]
    recipe(id: ID!) : Recipe
  }
  type Mutation {
    addRecipe(recipeName: String!, localName: String, origin: String!, cookTime: Int!, ingredients: [String], recommendedVideo: [String], category: String!): RecipeResponse
    updateRecipe(id: ID!, recipeName: String, localName: String, origin: String, cookTime: Int, ingredients: [String], recommendedVideo: [String], category: String): RecipeResponse
    deleteRecipe(id: ID!): RecipeResponse
  }
  type Recipe {
    id: ID!
    recipeName: String!
    localName: String
    origin: String!
    cookTime: Int!
    ingredients: [String]
    recommendedVideo: [String]
    category: String!
  }
  type Recipes {
    recipes: [Recipe]
  }
  type RecipeResponse {
    data: Recipe
    error: String
    ok: Boolean
  }`);

module.exports = schema;
