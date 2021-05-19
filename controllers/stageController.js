const db = require("../models");

// Defining methods for the stageController
module.exports = {
  //finding all the available stages
  findAll: function (req, res) {
    db.Stage.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //finding an individual stage
  findById: function (req, res) {
    db.Stage.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
