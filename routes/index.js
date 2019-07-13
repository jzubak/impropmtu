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
    let initialres = JSON.stringify(dbFilter);
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
      destFiltered = JSON.stringify(destinationFilter);
      return destFiltered
    }).then(function (endQ, res) {
      // console.log(initialres, endQ)
      // console.log(req.body)
      userIn = JSON.stringify(req.body)
      // res.json({data:{userInput: req.body, airportsArray: initialres, destinationsArray: endQ}})
      qRes.push({userInput: userIn}, {airArray: initialres}, {destArray: endQ})
      
      console.log(qRes)
    }).then(function(callkiwi){
      //  console.log("this is the qRes data", qRes)
       axiosKiwi(callkiwi);
    })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      })
  })
});


router.route("/Results").post(function(req, res){
  db.SearchResults.create(req.body).then(function(searchPost){
    console.log("this is the results post");
    console.log(req.body)
    res.json(searchPost)
  })
})
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const axiosKiwi = function(){
  //this is the kiwi api search
  let startLocal = qRes[0].userInput[0].from;
  let endLocal = [];
  
  // console.log('I********************************',qRes[0])
    // console.log("---------------------", qRes)
    for (let i = 0; i < qRes[1].airArray[i].code; i++ ) {
      endLocal.push(qRes[1].airArray[i].code)
    }
    // ("this is a for loop over the results looking for airportssArray.initialres.code[i]");
  
  //format in DD/MM/YYYY
  let departDate = "08/01/2019"
  // qRes[0].depart;
  let returnDate = "09/01/2019"
  //  qRes[0].returnn;

  console.log(startLocal, endLocal, departDate, returnDate)
  
  //add variable extension
  let term = startLocal;
  let locale = "USD";
  let location_types = "airport" ;
  let limit = "10";
  let active_only = "true";
  let sort = "price";
  
  // Make a request from departure flight Kiwi
  axios.get(`https://api.skypicker.com/flights?flyFrom=${startLocal}&to=${endLocal}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)
  
  
    .then(function (response) {
  
      let resArray = [] 
  
      // console.log(response.data.data[].price)
      for (let i=0; i < 10; i++ ){
        resArray.push(response.data.data[i].price)
      }
      resArray.sort(function(a, b){return a-b})
    
      console.log(resArray);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function (SearchResults) {
      // response.JSON.stringify(SearchResults)
    });
  
  
  
  // Make a request from Kiwi
  axios.get(`https://api.skypicker.com/flights?flyFrom=${endLocal}&to=${startLocal}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)
  
  
    .then(function (response) {
  
      
      let resArray = []
      // console.log(response.data.data[].price)
      for (let i=0; i < 10; i++ ){
        resArray.push(response.data.data[i].price);
      }
  
      resArray.sort(function(a, b){return a-b})
    
      console.log(resArray);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function (SearchResults) {
      // response.JSON.stringify(SearchResults)
    });
  
  };


module.exports = router;