const express = require("express");
const cookieParser = require("cookie-parser");
const authController = require("../controllers/authController");
const authenticateUser = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(cookieParser());

router.post("/user/login", authController.userLogin);
router.get("/logout", authController.userLogout);
router.post("/admin/login", authController.adminLogin);
router.post("/register", authController.register);
router.post("/registerAdmin", authController.registerAdmin);
router.get("/verify", authenticateUser.authenticateUser, authController.verifyToken);

module.exports = router;
