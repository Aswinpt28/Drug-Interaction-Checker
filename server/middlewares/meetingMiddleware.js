const jwt = require("jsonwebtoken");
require("dotenv").config();

const decodeToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    console.error("Error decoding token:", error);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = decodeToken;
