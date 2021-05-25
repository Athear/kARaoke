const router = require("express").Router();
const giphyController = require("../../controllers/giphyController");

// Matches with "/api/giphy"
router.route("/")
  .get(giphyController.find)

module.exports = router;