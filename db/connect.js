const mongoose = require(`mongoose`);
const envs = require(`../config/config`);

mongoose.connect(envs.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
