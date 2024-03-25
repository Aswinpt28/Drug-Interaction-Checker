// routes/pills.js
const express = require("express");
const router = express.Router();
const pillController = require("../controllers/pillController");

router.get("/getdrugandimageurl", pillController.getDrugAndImageUrl);

router.post("/addpill", pillController.addPill);

module.exports = router;
