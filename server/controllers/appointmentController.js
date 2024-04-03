const Appointment = require("../models/book");

exports.getAllAppointments = async (req, res) => {
  try {
    if (req.userRole === "admin") {
      const appointments = await Appointment.find()
        .populate("doctor", "name specialization")
        .populate("patient", "username");
      return res.json(appointments);
    } else if (req.userRole === "user") {
      const appointments = await Appointment.find({ patient: req.userId })
        .populate("doctor", "name")
        .populate("patient", "username");

      return res.json(appointments);
    } else if (req.userRole === "doctor") {
      const appointments = await Appointment.find({ doctor: req.userId })
        .populate("doctor", "name")
        .populate("patient", "username");

      return res.json(appointments);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
