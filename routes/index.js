const path = require("path");
const router = require("express").Router();
const sequelize = require("sequelize");
const Sequalize = require("Sequelize");
const apiRoutes = require("./api");
const db = require("../models");
const Op = Sequalize.Op;

let forAPI = {
  flightAPI:[],
  hotelsAPI:[],
  };
// API Routes
router.use("/api", apiRoutes);

// api/search
//this is where we need to write the sequalize version of this SQL query:
//select * from airports where *column name* = true (for however many columns the input answer is not 0)
//this is will give us all aiport options
//select distinct from desinations using the foreign key from the airports query where *column name* = true (limited to the columns where the input is not 0)
router.route('/api/search').post(function (req, res) {
  console.log('in search route');
  console.log(req.body)
  db.airport.findAll({
    where: {
      [Op.or]:
        [{ beach: req.body.Beach },
        { urban: req.body.Urban },
        { hiking: req.body.Hiking },
        { food: req.body.Food },
        { nightlife: req.body.Nightlife },
        { historic: req.body.Historic },
        { ski: req.body.Music },
        { quiet: req.body.Quiet },
        { kidfriendly: req.body.KidFriendly }]
    }
  }).then(function (dbFilter) {
    // console.log("out of the databse query");
    // console.log("---------------------------", req.body);
    // console.log(dbFilter);
    var initialres = JSON.stringify(dbFilter);
    // console.log("this is the inital results")
    console.log(initialres)
    // console.log("in the 2nd call")
    // console.log("-req.body again-", req.body);
    db.destination.findAll({
      where: {
        beach: req.body.Beach,
        urban: req.body.Urban,
        hiking: req.body.Hiking,
        food: req.body.Food,
        nightlife: req.body.Nightlife,
        historic: req.body.Historic,
        ski: req.body.Music,
        quiet: req.body.Quiet,
        kidfriendly: req.body.KidFriendly,
      }
    }).then(function (destinationFilter) {
      console.log("filtered through destination table")
      // console.log(destinationFilter)
      destFiltered = JSON.stringify(destinationFilter);
      // console.log(destFiltered);
      // console.log(initialres);
    }).then(function(endQ){
      console.log("this is where the final obejct of arrays will be");
      console.log("this is the results of the airport query");
      console.log(initialres);
      console.log("this is the results of the destinations query");
      console.log(destFiltered);
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
    })
  })
});



// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;