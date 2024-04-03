// routes/bookRoutes.js

const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authenticateUser = require("../middlewares/authMiddleware");

// Route for booking appointments
router.post(
  "/addappointments",
  authenticateUser.authenticateUser,
  bookController.bookAppointment
);
router.get("/fetchappointments", bookController.getAllAppointments);
router.put("/editappointments/:id", bookController.editCandidateById);
router.delete("/deleteappointments/:id", bookController.deleteBookingById);

module.exports = router;
