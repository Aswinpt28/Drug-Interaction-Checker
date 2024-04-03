const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  doctor: { type: Schema.Types.ObjectId, ref: "Doctor" },
  patient: { type: Schema.Types.ObjectId, ref: "User" },
  meeting: { type: String, required: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
