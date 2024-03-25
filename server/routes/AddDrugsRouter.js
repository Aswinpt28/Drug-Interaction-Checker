// routes/AddDrugsRouter.js
const express = require("express");
const router = express.Router();
const drugController = require("../controllers/AddDrugsController");

router.post("/AddDrugs", drugController.saveDrug);
router.get("/Fetchdrugs", drugController.getAllDrugs);

module.exports = router;
