const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Task Model fields
 */
const taskScheme = new Schema({
  description: { type: String, required: true },
  status: { type: Boolean, required: true },
  user_id: { type: String, required: true }
});


module.exports = mongoose.model("Task", taskScheme);
