const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// Route for adding a new doctor
router.post("/add", doctorController.addDoctor);

// Route for doctor login
router.post("/login", doctorController.loginDoctor);
router.get("/doc", doctorController.getAllDoctors);

module.exports = router;
