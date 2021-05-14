const router = require("express").Router();
const stageRoutes = require("./stage");

// Book routes
router.use("/stage", stageRoutes);

module.exports = router;
