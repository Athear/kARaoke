const router = require("express").Router();
const userController = require("../../controllers/userController");

//signup
router.post("/signup",userController.create);

//login
router.get("/login",userController.login);
// router.get("/register", async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }
//     console.log(userData);
//     req.session.save(() => {
//       req.session.logged_in = true;
//       req.session.user_id = userData.id;
//       req.session.first_name = userData.first_name;
//       console.log(req.session);
//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post("/logout", (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// router.get("/user_data", (req, res) => {
//   console.log(req.session);
//   if (!req.session) {
//     res.json(null);
//   } else {
//     res.json({
//       id: req.session.user_id,
//       name: req.session.first_name,
//     });
//   }
// });

module.exports = router;
