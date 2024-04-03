const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const authenticateUser = require("../middlewares/authMiddleware");

router.get(
  "/meet",
  authenticateUser.authenticateUser,
  appointmentController.getAllAppointments
);

module.exports = router;
