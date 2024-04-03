const Appointment = require("../models/book");

exports.bookAppointment = async (req, res) => {
  try {
    const { date, doctor, meeting } = req.body;
    const patient = req.userId;
    const appointment = new Appointment({ doctor, date, patient, meeting });
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ error: "Failed to book appointment" });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    let appointments;
    // const doctorName = req.userData.name;

    // if (doctorName) {
    //   appointments = await Appointment.find({ doctor: doctorName });
    // } else {
    appointments = await Appointment.find()
      .populate("doctor")
      .populate("patient");

    // }
    const parsedData = appointments.map((appointment) => {
      return {
        _id: appointment._id,
        patient: appointment.patient,
        doctor: appointment.doctor?.name ?? null,
        date: appointment.date,
      };
    });
    res.status(200).json({ appointments: parsedData });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
};
exports.editCandidateById = async (req, res) => {
  const { id } = req.params;
  const updatedCandidateData = req.body[0];
  try {
    const candidate = await Appointment.findByIdAndUpdate(
      id,
      updatedCandidateData,
      { new: true }
    );
    if (!candidate) {
      return res.status(404).json({ error: "Candidate not found" });
    }
    res
      .status(200)
      .json({ message: "Candidate details updated successfully", candidate });
  } catch (error) {
    console.error("Error updating candidate details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Appointment.findByIdAndDelete(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
