const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
  drugName: String,
  dosage: String,
  indication: String,
  dateOfIssue: Date,
  symptoms: String,
});

const Drug = mongoose.model("Drug", drugSchema);

module.exports = Drug;
