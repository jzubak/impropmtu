const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

//Matches with "/api/trips"
router.route("/")
  .get(tripsController.findAll);
  // .post(tripsController.findAll);

// Matches with "/api/trips/:id"
// router
//   .route("/api/:id")
//   .get(tripsController.findById)
//   .put(tripsController.update)
//   .delete(tripsController.remove);


// router
//   .route("/api/trip")
module.exports = router;
