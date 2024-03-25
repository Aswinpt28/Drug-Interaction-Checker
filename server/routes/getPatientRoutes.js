const express = require("express");
const router = express.Router();
const getPatientController = require("../controllers/getPatientController");

router.get("/getpatients", getPatientController.getUsers);

module.exports = router;
