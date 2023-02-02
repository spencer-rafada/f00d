// id: ID!
// recipeName: String!
// localName: String
// origin: String!
// cookTime: Int!
// ingredients: [String]
// recommendedVideo: [String]
// category: String!

module.exports = [
  {
    id: "1",
    recipeName: "Adobo",
    localName: "Adobo",
    origin: "Philippines",
    cookTime: 30,
    ingredients: ["soy sauce", "vinegar"],
    recommendedVideo: ["1", "2"],
    category: "Savory",
  },
  {
    id: "2",
    recipeName: "Soursoup",
    localName: "Sinigang",
    origin: "Philippines",
    cookTime: 60,
    ingredients: ["pork", "tomatoes", "water"],
    recommendedVideo: ["1", "2"],
    category: "Soup",
  },
  {
    id: "3",
    recipeName: "Sisig",
    localName: "Sisig",
    origin: "Philippines",
    cookTime: 1,
    ingredients: ["pork belly", "chilli"],
    recommendedVideo: ["1", "2"],
    category: "Crispy",
  },
];
