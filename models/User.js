const mongoose = require("mongoose");
const connection = require('../database');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

/**
 * User Model fields
 */
const userScheme = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

/**
 * Custom Error hook
 */
userScheme.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('This email already exist'));
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userScheme);
