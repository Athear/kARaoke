const router = require("express").Router();
const userController = require("../../controllers/userController");

//signup
router.post("/signup",userController.create);

//login
router.post("/login",userController.login);

module.exports = router;
