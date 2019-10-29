const mongoose = require("mongoose");
const config = require('config');

const dbConfig = config.get('dbConfig');

const connection = mongoose.connect(
  `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = connection;
