const router = require("express").Router();
const tripRoutes = require("./trips");
// var db = require("./models");

// Trip routes
router.use("/trips", tripRoutes);

// api/search
// router.route('/search', function (req, res) {
//     console.log('in search route');
//     console.log(req.body)
    
// })

module.exports = router;
