const router = require("express").Router();
const stageController = require("../../controllers/stageController");

// Matches with "/api/stage"
router.route("/").get(stageController.findAll);

// Matches with "/api/stage/:id"
router.route("/:id").get(stageController.findById);

module.exports = router;
