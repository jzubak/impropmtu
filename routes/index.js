const path = require("path");
const router = require("express").Router();
const sequelize = require("sequelize");
const Sequalize = require("Sequelize");
const apiRoutes = require("./api");
const db = require("../models");
const Op = Sequalize.Op;

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
    db.Airport.findAll({where: {[Op.or]: 
          [{beach: req.body.Beach},
          {urban: req.body.Urban},
          {hiking: req.body.Hiking},
          {food: req.body.Food},
          {nightlife: req.body.Nightlife},
          {historic: req.body.Historic},
          {ski: req.body.Music},
          {quiet: req.body.Quiet},
          {kidfriendly: req.body.KidFriendly}]}
      }).then(function(dbFilter){
          console.log("out of the databse query");
          res.json(dbFilter)
          console.log(dbFilter)
      }).catch(function(err){
      console.log(err);
      res.json(err);
  })
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
