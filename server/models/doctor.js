const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  phoneNumber: String,
  email: String,
  password: String,
  temporaryPassword: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
