const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  id: Number,
  email: String,
});

const getUser = mongoose.model("getUser", userSchema);

module.exports = getUser;
