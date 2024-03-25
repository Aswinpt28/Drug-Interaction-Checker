/* eslint-disable no-unused-vars */
const User = require("../models/User");

exports.getUserProfile = async (req, res) => {
  try {
    const { userId } = req;

    // Fetch additional user details from the database if needed
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Include additional user details in the response if needed
    const userProfile = {
      userId: user._id,
      username: user.username,
      email: user.email,
      phonenumber: user.phonenumber,
      role: user.role,
    };

    res.json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getUsersList = async (req, res) => {
  try {
    // Ensure the user making the request is an admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Permission denied" });
    }

    // Fetch the list of users from the database
    const users = await User.find({}, { password: 0 }); // Exclude the password field

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
