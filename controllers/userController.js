const { restart } = require("nodemon");
const { User } = require("../models");
const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ username: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.User
      .find(req.params.username)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function (req, res) {
    const currentUser = await db.User.findOne({ email: req.body.email }).exec()
    if (currentUser) {
      res.status(400).json({ message: "This email is already registered" });
    } else {
      let newUser = new db.User(req.body);
      await newUser.hashPassword(req.body.password)
      newUser
        .save()
        .then(dbModel => {
          console.log(newUser)
          req.session.logged_in = true;
          req.session.user_id = newUser._id;
          res.status(200).json({sessionID: req.sessionID, message: "User created", })
        })
        .catch(err => res.status(422).json(err));
    }
  },
  login: async function (req, res) {
    try {
      const userData = await db.User.findOne({ username: req.body.username }).exec()

      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect user name or password, please try again" });
        return;
      }

      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect user name or password, please try again" });
        return;
      }
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = userData.id;
        res.json({ sessionID: req.sessionID, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  getUserData: function (req, res) {
    if (!req.session) {
      res.json(null);
    } else {
      res.json({
        user_id: req.session.user_id,
        session_id: req.sessionID
      });
    }
  }
};
