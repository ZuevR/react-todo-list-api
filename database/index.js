const mongoose = require("mongoose");

const connection = mongoose.connect(
  'mongodb://localhost:27017/todo_list',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = connection;
