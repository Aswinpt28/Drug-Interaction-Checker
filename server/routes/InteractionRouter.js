// routes/InteractionRouter.js

const express = require("express");
const router = express.Router();
const interactionController = require("../controllers/InteractionController");

router.post("/check", interactionController.checkInteractions);
router.post("/interaction", interactionController.saveInteraction);

module.exports = router;
