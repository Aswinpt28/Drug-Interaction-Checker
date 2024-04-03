const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.authenticateUser = (req, res, next) => {
  const token = req.cookies.authToken;

  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.SECRET, {}, (err, userData) => {
      if (err) {
        return res.status(401).json({ msg: "Unauthorized: Invalid Token" });
      }
      req.userId = userData.userId;
      req.email = userData.email;
      req.userRole = userData.role;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
};
