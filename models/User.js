const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
  assignedStreets: [String],
});

module.exports = mongoose.model("User", UserSchema);
