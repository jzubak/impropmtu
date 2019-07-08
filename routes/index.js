const path = require("path");
const router = require("express").Router();
const sequelize = require("sequelize");
const apiRoutes = require("./api");
const db = require("../models")

// API Routes
router.use("/api", apiRoutes);

// api/search
//this is where we need to write the sequalize version of this SQL query:
    //select * from airports where *column name* = true (for however many columns the input answer is not 0)
    //this is will give us all aiport options
    //select distinct from desinations using the foreign key from the airports query where *column name* = true (limited to the columns where the input is not 0)
router.route('/api/search').post(function(req, res) {
    console.log('in search route');
    console.log(req.body)
    // do more stuff here
    db.Airport.findAll({
      // console.log("in search")
      where: {
          Beach: req.body.Beach,
          Urban: req.body.Urban,
          Hiking: req.body.Hiking,
          Food: req.body.Food,
          Nightlife: req.body.Nightlife,
          Historic: req.body.Historic,
          Ski: req.body.Ski,
          Quiet: req.body.Quiet,
          Kidfriendly: req.body.Kidfriendly}
      }).then(function(dbFilter){
          console.log("out of the databse query")
          res.json(dbFilter)
          console.log(dbFilter)
      }).catch(function(err){
      res.json(err);
  })
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
