const { config } = require(`dotenv`);

config();

module.exports = {
  port: process.env.PORT || 8080,
  graphqlPath: process.env.GRAPHQL_PATH || `/graphql`,
  dbUrl: process.env.MONGODB_URI,
};
