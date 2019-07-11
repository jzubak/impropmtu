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
router.route('/api/search').post(function (req, res) {
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
    let initialres = JSON.stringify(dbFilter);
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
      destFiltered = JSON.stringify(destinationFilter);
      return destFiltered
    }).then(function (endQ) {
      res.json({data:{airportsArray: initialres, destinationsArray: endQ}})
    })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      })
  })
});


// router.route("/Results").post(function(req, res){
//   db.searchresults.create(req.body).then(function(searchPost){
//     res.json(searchPost)
//     console.log("this is the results post");
//     console.log(req.body)
//   })
// })
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;