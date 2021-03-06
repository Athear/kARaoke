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
      const newUser = new db.User(req.body);
      await newUser.hashPassword(req.body.password)
      newUser
        .save()
        .then(dbModel => {
          console.log(newUser)
          req.session.logged_in = true;
          req.session.user_id = newUser._id;
          res.status(200).json({ sessionID: req.sessionID, user: newUser, message: "User registered" })
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
        res.json({ sessionID: req.sessionID, user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  logout: function (req, res) {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(200).end();
    }
  },

  getUserData: function (req, res) {
    if (!req.session.logged_in) {
      res.json(null);
    } else {
      db.User.findById({ _id: req.session.user_id })
        .then(user => {
          res.json({
            user: user,
            session_id: req.sessionID
          });
        })
    }
  }
};
