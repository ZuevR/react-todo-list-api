const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Task Model fields
 */
const taskScheme = new Schema({
  _id: { type: Number, required: true },
  description: { type: String, required: true },
  // password: { type: String, required: true }
});


module.exports = mongoose.model("Task", taskScheme);
