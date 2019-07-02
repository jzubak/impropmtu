const router = require("express").Router();
const tripsController = require("../../controllers/tripssController");

// Matches with "/api/books"
router.route("/")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
