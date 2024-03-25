const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/MedicineController");

router.post("/medicine", medicineController.getSideEffects);

module.exports = router;
