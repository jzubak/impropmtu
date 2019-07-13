const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const sequelize = require("sequelize");
const Sequalize = require("Sequelize");
const apiRoutes = require("./api");
const db = require("../models");
const Op = Sequalize.Op;

let qRes = [];

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
        { ski: req.body.Ski },
        { quiet: req.body.Quiet },
        { kidfriendly: req.body.KidFriendly }]
    }
  }).then(function (dbFilter) {
    let initialres = dbFilter;
    db.destination.findAll({
      where: {
        beach: req.body.Beach,
        urban: req.body.Urban,
        hiking: req.body.Hiking,
        food: req.body.Food,
        nightlife: req.body.Nightlife,
        historic: req.body.Historic,
        ski: req.body.Ski,
        quiet: req.body.Quiet,
        kidfriendly: req.body.KidFriendly,
      }
    }).then(function (destinationFilter) {
      let destFiltered = destinationFilter
      return destFiltered
    }).then(function (endQ, res) {
      // console.log(initialres, endQ)
      // console.log(req.body)
      let userIn = req.body
      // res.json({data:{userInput: req.body, airportsArray: initialres, destinationsArray: endQ}})
      qRes.push({ userInput: userIn }, { airArray: initialres }, { destArray: endQ })

      // console.log(qRes)
    }).then(function (callkiwi) {
      //  console.log("this is the qRes data", qRes)
      axiosKiwi(callkiwi);
    })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      })
  })
});


router.route("/Results").post(function (req, res) {
  db.SearchResults.create(req.body).then(function (searchPost) {
    console.log("this is the results post");
    console.log(req.body)
    res.json(searchPost)
  })
})
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const axiosKiwi = function () {
  //this is the kiwi api search
  // console.log(qRes)
  const userInput = qRes[0].userInput;
  // console.log(userInput)
  let startLocal = userInput.from;
  let endLocal = [];
  let departDate = [];
  let returnDate = [];
  const airports = qRes[1].airArray;
  airports.forEach(element => {
    endLocal.push(element.code)
  });

  //format in DD/MM/YYYY
  const departDate1 = userInput.depart;
  let departFormat = departDate1.split("-")
  departDate.push(departFormat[1] + '/' + departFormat[2] + '/' + departFormat[0])
    
  
  let returnDate1 = userInput.return;
  let returnFormat = returnDate1.split("-")
  returnDate.push(returnFormat[1] + '/' + returnFormat[2] + '/' + returnFormat[0])
    

  // console.log(departDate);
  console.log("TEST DATA: ", startLocal, endLocal, departDate, returnDate)
  // console.log("*********", loopRes)

  //add variable extension
  let term = startLocal;
  let locale = "USD";
  let location_types = "airport";
  let limit = "10";
  let active_only = "true";
  let sort = "price";

  // Make a request from departure flight Kiwi
  axios.get(`https://api.skypicker.com/flights?flyFrom=${startLocal}&to=${endLocali}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)


    .then(function (response) {

      let resArray = []

      // console.log(response.data.data[].price)
      for (let i = 0; i < 10; i++) {
        resArray.push(response.data.data[i].price)
      }
      resArray.sort(function (a, b) { return a - b })

      // console.log(resArray);
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    })
    .finally(function (SearchResults) {
      // response.JSON.stringify(SearchResults)
    });



  // Make a request from Kiwi
  axios.get(`https://api.skypicker.com/flights?flyFrom=${endLocal}&to=${startLocal}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)


    .then(function (response) {


      let resArray = []
      // console.log(response.data.data[].price)
      for (let i = 0; i < 10; i++) {
        resArray.push(response.data.data[i].price);
      }

      resArray.sort(function (a, b) { return a - b })

      // console.log(resArray);
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    })
    .finally(function (SearchResults) {
      // response.JSON.stringify(SearchResults)
    });

};


module.exports = router;