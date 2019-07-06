const router = require("express").Router();
const tripRoutes = require("./trips");

// Trip routes
router.use("/trips", tripRoutes);

module.exports = router;
