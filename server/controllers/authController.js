const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");
const dotenv = require("dotenv");
dotenv.config();

const handleLogin = async (req, res, role) => {
  try {
    const { email, password } = req.body;

    const user = await (role === "user" ? User : Admin).findOne({
      email,
      role,
    });

    if (!user) {
      return res.status(401).json({
        message: `Invalid email or password. ${role} not found.`,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.SECRET
    );

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: 3600000,
    });

    res.json({
      message: "Login successful",
      user_id: user._id,
      user_email: user.email,
      user_type: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.userLogin = async (req, res) => {
  await handleLogin(req, res, "user");
};

exports.adminLogin = async (req, res) => {
  await handleLogin(req, res, "admin");
};

exports.register = async (req, res) => {
  try {
    const { username, password, email, profession, phonenumber, role } =
      req.body;

    const existingUser = await User.findOne({
      $or: [{ username }, { email }, { profession }, { phonenumber }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser =
      role === "admin"
        ? new Admin({ username, password: hashedPassword })
        : new User({
            username,
            password: hashedPassword,
            profession,
            phonenumber,
            email,
          });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({ message: "Admin email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.userLogout = (req, res) => {
  try {
    res.clearCookie("authToken");
    return res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    console.error("Error clearing cookie:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.verifyToken = (req, res) => {
  if (req.userId) {
    return res.status(200).json({
      msg: "authorization successful",
      user_id: req.userId,
      user_name: req.email,
      user_type: req.userRole,
    });
  }
};
