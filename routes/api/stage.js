const router = require("express").Router();
const stageController = require("../../controllers/stageController");

// Matches with "/api/books"
router.route("/")
  .get(stageController.findAll)
  // .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(stageController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
