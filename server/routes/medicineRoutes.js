const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/MedicineController");

router.post("/medicine", medicineController.saveMedicine);
router.get("/medicine/sideeffects", medicineController.getSideEffects); // Corrected route path

module.exports = router;
