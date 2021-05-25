const router = require("express").Router();

const stageRoutes = require("./stage");
const userRoutes = require("./userRoutes");
const giphyRoutes = require("./giphyRoutes");

router.use("/stage", stageRoutes);
router.use("/users", userRoutes);
router.use("/giphy", giphyRoutes);

module.exports = router;
