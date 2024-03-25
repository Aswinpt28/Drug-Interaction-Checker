const express = require("express");
const userController = require("../controllers/userController");
const authenticateUser = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getuser", authenticateUser.authenticateUser, userController.getUserProfile);
// router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
// router.patch("/users/:id", isAuthenticated, isOwner, updateUser);

module.exports = router;
