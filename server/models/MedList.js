const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: String,
});

const MedList = mongoose.model("MedList", medicineSchema);

module.exports = MedList;
