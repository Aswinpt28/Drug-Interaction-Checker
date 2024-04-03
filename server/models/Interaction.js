const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
  drugName: String,
  symptoms: String,
});

const Interaction = mongoose.model("Interaction", interactionSchema);

module.exports = Interaction;
