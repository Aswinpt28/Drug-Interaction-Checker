const express = require("express");
const router = express.Router();
const userListController = require("../controllers/UserListController");

router.get("/list", userListController.getUsersList);

module.exports = router;
