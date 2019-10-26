const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connection = require('../database');

const userScheme = new Schema({
  name: String,
  email: String,
  password: String
});


const User = mongoose.model("User", userScheme);


module.exports = User;
