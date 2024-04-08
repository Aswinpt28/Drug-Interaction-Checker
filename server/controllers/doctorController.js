const bcrypt = require("bcrypt");
const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addDoctor = async (req, res) => {
  const { name, specialization, phoneNumber, email } = req.body;

  // Generating a temporary password for the doctor
  const temporaryPassword = `Doc_${Math.random()
    .toString(36)
    .substring(2, 10)}`;

  try {
    // Hashing the temporary password
    const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

    // Creating a new doctor instance including the temporary password
    const newDoctor = new Doctor({
      name,
      specialization,
      phoneNumber,
      email,
      password: hashedPassword,
      temporaryPassword: temporaryPassword, // Save temporary password to database
    });

    // Saving the doctor to the database
    await newDoctor.save();

    // Sending response
    res
      .status(200)
      .json({ message: "Doctor added successfully", temporaryPassword });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add doctor" });
  }
};

const loginDoctor = async (req, res) => {
  const { email, temporaryPassword } = req.body;

  try {
    // Find doctor by email
    const doctor = await Doctor.findOne({ email });

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const passwordMatch = await bcrypt.compare(
      temporaryPassword,
      doctor.password
    );

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const doctorData = {
      userId: doctor.id,
      username: doctor.name,
      role: doctor.role,
    };

    const token = jwt.sign(doctorData, process.env.SECRET, {
      expiresIn: "1h",
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(200).json({
      msg: "authorization successful",
      user_id: doctor.id,
      user_type: doctor.role,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json({ success: true, doctors });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctors" });
  }
};

module.exports = {
  addDoctor,
  loginDoctor,
  getAllDoctors,
};
