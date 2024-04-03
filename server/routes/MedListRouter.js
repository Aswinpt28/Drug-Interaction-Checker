const express = require("express");
const router = express.Router();
const MedListController = require("../controllers/MedListController");

router.post("/add", MedListController.saveMedList);
router.get("/all", MedListController.getAllMedicines);

module.exports = router;
