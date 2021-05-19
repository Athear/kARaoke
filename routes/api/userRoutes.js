const router = require("express").Router();
const userController = require("../../controllers/userController");

//signup
router.post("/signup", userController.create);

//login
router.post("/login", userController.login);

//logout
router.post("/logout", userController.logout);

//session data
router.get("/session", userController.getUserData);

module.exports = router;
