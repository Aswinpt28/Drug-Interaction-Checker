// models/pill.js
const mongoose = require("mongoose");

const pillSchema = new mongoose.Schema({
  imprint: String,
  color: String,
  shape: String,
  drug: String,
  imageUrl: String,
});

module.exports = mongoose.model("Pill", pillSchema);
