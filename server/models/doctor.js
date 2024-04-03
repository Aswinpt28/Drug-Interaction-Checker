const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  phoneNumber: String,
  email: String,
  password: String,
  temporaryPassword: String,
  role: { type: String, default: "doctor" },
  // appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
