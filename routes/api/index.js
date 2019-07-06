const router = require("express").Router();
const tripRoutes = require("./trips");

// Trip routes
router.use("/trips", tripRoutes);

// // api/search
// router.route('/search', function(req, res) {
//     console.log('in search route');

//     //do more stuff here
// })

module.exports = router;
