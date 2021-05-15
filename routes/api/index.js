const router = require("express").Router();

const stageRoutes = require("./stage");
const userRoutes = require("./userRoutes")

router.use("/stage", stageRoutes);
router.use("/users", userRoutes);

module.exports = router;
