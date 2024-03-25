const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: String,
  sideEffects: [String],
});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = Medicine;
