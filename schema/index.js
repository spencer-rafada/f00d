const schema = require(`./schema`);
const query = require(`./query`);
const mutation = require(`./mutation`);

const resolver = {
  ...query,
  ...mutation,
};

module.exports.resolver = resolver;
module.exports.schema = schema;
