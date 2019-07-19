const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const sequelize = require("sequelize");
const Sequalize = require("Sequelize");
const apiRoutes = require("./api");
const db = require("../models"); 
const Op = Sequalize.Op;

let queryResults = []; 
let clientReturnArray = [];
let clientDepartureArray = [];  
let gCompletedKiwi = [];
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
        { kidfriendly: req.body.KidFriendly }]}
    // === 1}
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
      let userIn = req.body
      // res.json({data:{userInput: req.body, airportsArray: initialres, destinationsArray: endQ}})
      queryResults.push({ userInput: userIn }, { airArray: initialres }, { destArray: endQ })
      // console.log(qRes)
    }).then(function (callkiwi) {
      //  console.log("this is the qRes data", qRes)
      axiosKiwi(res)
      // return qRes
    })
      .catch(function (err) {
        console.log(err);
        // res.json(err);
      })
  })
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//this is the kiwi api search
async function axiosKiwi(searchRes) {
  console.log(queryResults[0].userInput)
  const userInput = queryResults[0].userInput;
  let startLocal = userInput.from;
  let endLocal = [];
  let departDate = [];
  let returnDate = [];
  const airports = queryResults[1].airArray;
  airports.forEach(element => {
    endLocal.push(element.code)
  });

  //format in DD/MM/YYYY
  const departDate1 = userInput.depart;
  let departFormat = departDate1.split("-")
  departDate.push(departFormat[2] + '/' + departFormat[1] + '/' + departFormat[0])

  let returnDate1 = userInput.returnn;
  let returnFormat = returnDate1.split("-")
  returnDate.push(returnFormat[2] + '/' + returnFormat[1] + '/' + returnFormat[0])

  // console.log("TEST DATA: ", startLocal, endLocal, departDate, returnDate)

  //add variable extension
  let term = startLocal;
  let locale = "USD";
  let location_types = "airport";
  let limit = "10";
  let active_only = "true";
  let sort = "price";
  let depArray = [];
  let retArray = [];

  //Promise.all version of depSearch
  const departureSearchURLs = []
  for (let i = 0; i < endLocal.length; i++) {
    let currentEndLocal = endLocal[i]
    let depSearchObj = {
      startingIATA: startLocal,
      destinationIATA: currentEndLocal,
      flights: []
    }
    departureSearchURLs.push(`https://api.skypicker.com/flights?flyFrom=${startLocal}&to=${endLocal[i]}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)
  }
  // console.log("**** this is the promise.all start***", departureSearchURLs);
  const depPromises = departureSearchURLs.map(async (departureSearchURL, idx) => {
    // console.log(`received departure search ${idx+1}:`) 
    return await axios.get(departureSearchURL)
  });
  const depResponses = await Promise.all(depPromises);
  // console.log("FINITE!", responses);
  const departureSearchObjs = depResponses.map((resp, departureResponseIndex) => {
    const depSearchObj = {
      startingIATA: startLocal,
      destinationIATA: endLocal[departureResponseIndex],
      flights: []
    }
    const mappedFlights = resp.data.data.map(((flight, mappedFlightIndex) => {
      // console.log(flight.route)
      return {
        prices: flight.price,
        airlineIATA: flight.route[0].airline,
        departureTime: flight.dTime,
        flightTime: flight.fly_duration,
        arrivalTime: flight.aTime,
        bookingLink: `www.kiwi.com/deep?affilid=test&from=${startLocal}&to=${flight.flyTo}&departure=${returnDate}`,
        destinationCity: flight.cityTo
        // ,stops: connections[0]
      }
    }))
    depSearchObj.flights = mappedFlights
    // console.log(depSearchObj);
    depArray = Array.from(Object.keys(depSearchObj), k => [`${k}`, depSearchObj[k]]);
    clientDepartureArray.push(depArray);
    return depSearchObj
  })

  // console.log('***departureSearchObjs***', departureSearchObjs, departureSearchObjs[0].flights[0])

  // Make a return flight Promise.all request from Kiwi
  const returnSearchURLs = []
  for (let i = 0; i < endLocal.length; i++) {
    let currentEndLocal = endLocal[i]
    let retSearchObj = {
      startingIATA: currentEndLocal,
      destinationIATA: startLocal,
      flights: []
    }
    returnSearchURLs.push(`https://api.skypicker.com/flights?flyFrom=${endLocal[i]}&to=${startLocal}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)
  }
  // console.log("**** this is the promise.all start***", returnSearchURLs);
  const retPromises = returnSearchURLs.map(async (returnSearchURL, idx) => {
    // console.log(`received departure search ${idx+1}:`) 
    return await axios.get(returnSearchURL)
  });
  const retResponses = await Promise.all(retPromises);
  // console.log("FINITE!", responses);
  const returnSearchObjs = retResponses.map((resp, returnResponseIndex) => {
    const retSearchObj = {
      startingIATA: endLocal[returnResponseIndex],
      destinationIATA: startLocal,
      flights: []
    }
    const retMappedFlights = resp.data.data.map(((flight, mappedFlightIndex) => {
      // console.log(flight.route)
      return {
        prices: flight.price,
        airlineIATA: flight.route[0].airline,
        departureTime: flight.dTime,
        flightTime: flight.fly_duration,
        arrivalTime: flight.aTime,
        bookingLink: `www.kiwi.com/deep?affilid=test&from=${flight.flyFrom}&to=${startLocal}&departure=${returnDate}`,
        homeCity: flight.cityTo
        // ,stops: connections[0]
      }
    }))
    retSearchObj.flights = retMappedFlights
    // console.log(depSearchObj);
    retArray = Array.from(Object.keys(retSearchObj), k => [`${k}`, retSearchObj[k]]);
    clientReturnArray.push(retArray);
    return retSearchObj
  })
  //concat the dep and return SearchObjects
  const completedKiwi = Object.assign({ departures: departureSearchObjs }, { returns: returnSearchObjs })
  // .then(searchRes => {res.json(completedKiwi)});
  searchRes.json(completedKiwi).end()
  // console.log('request done!', completedKiwi, "... def done")
  // gCompletedKiwi.push(completedKiwi)
  
};

console.log("clientDepartureArray:", clientDepartureArray);
console.log("clientReturnArray:", clientReturnArray);

module.exports = router;