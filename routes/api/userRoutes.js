const router = require("express").Router();
const { User } = require("../../models");

router.post("/ownerprofile", async (req, res) => {
  console.log("Incoming: user data: \n", req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (userData) {
      res.status(400).json({ message: "Email already exists in our system" });
      return;
    } else if (!userData) {
      const user = new User({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        zip: req.body.zipcode,
        password: req.body.password,
        gender: req.body.gender,
      });
      user.save().then((result) => {
        console.log(result);
        req.session.logged_in = true;
        req.session.user_id = user.id;
        req.session.first_name = user.first_name;
        console.log(user);
        res.status(200).json({
          message: "User created",
        });
      });
    }
  } catch (err) {
    console.log("create user FAILED", err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    console.log(userData);
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = userData.id;
      req.session.first_name = userData.first_name;
      console.log(req.session);
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/user_data", (req, res) => {
  console.log(req.session);
  if (!req.session) {
    res.json(null);
  } else {
    res.json({
      id: req.session.user_id,
      name: req.session.first_name,
    });
  }
});

module.exports = router;
