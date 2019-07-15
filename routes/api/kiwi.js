const axios = reqire("axios")

//this is the kiwi api search
const axiosKiwi = function () {
  const userInput = qRes[0].userInput;
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
  departDate.push(departFormat[2] + '/' + departFormat[1] + '/' + departFormat[0])

  let returnDate1 = userInput.return;
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

  // Make a request for departure flight Kiwi
  for (let i = 0; i < endLocal.length; i++) {
    let currentEndLocal = endLocal[i]
    let depSearchObj = {
      startingIATA: startLocal,
      destinationIATA: currentEndLocal,
      flights: []
    }
    axios.get(`https://api.skypicker.com/flights?flyFrom=${startLocal}&to=${endLocal[i]}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)
      .then(function (depSearch) {
        const mappedFlights = depSearch.data.data.map(((flight, index) => {
          // console.log(flight.route)
          return {
            prices: flight.price,
            airlineIATA: flight.route[0].airline,
            departureTime: flight.dTime,
            flightTime: flight.fly_duration,
            arrivalTime: flight.aTime,
            bookingLink: flight.deep_link[i]
            // ,stops: connections[0]
          }
        }))
        // console.log(mappedFlights[1]);
        depSearchObj.flights = mappedFlights
        // console.log(depSearchObj);
        depArray = Array.from(Object.keys(depSearchObj), k => [`${k}`, depSearchObj[k]]);
        console.log(depArray[0], depArray[1], depArray[2])
        // res.json(depArray)
      })
      .catch(function (error) {
        // res.json(error)
        // console.log(error);
      });
  };

  // Make a return flight request from Kiwi
  for (i = 0; i < endLocal.length; i++) {
    let currentEndLocal = endLocal[i]
    let retSearchObj = {
      startingIATA: startLocal,
      destinationIATA: currentEndLocal,
      flights: []
    }
    axios.get(`https://api.skypicker.com/flights?flyFrom=${endLocal}&to=${startLocal}&dateFrom=${departDate}&dateTo=${returnDate}&partner=picky/locations?term=${term}&locale=${locale}&location_types=${location_types}&limit=${limit}&active_only=${active_only}&sort=${sort}&curr=USD`)
      .then(function (retSearch) {
        const retMappedFlights = retSearch.data.data.map(((flight, index) => {
          // console.log(flight.route)
          return {
            prices: flight.price,
            airlineIATA: flight.route[0].airline,
            departureTime: flight.dTime,
            flightTime: flight.fly_duration,
            arrivalTime: flight.aTime
            // ,stops: connections[0]
          }
        }))
        // console.log(retMappedFlights[1]);
        retSearchObj.flights = retMappedFlights
        retArray = Array.from(Object.keys(retSearchObj), k => [`${k}`, retSearchObj[k]]);
        // console.log(retArray[0], retArray[1], retArray[2])
        // res.json(retArray)
      })
      .catch(function (error) {
        // res.json(error)
        // console.log(error);
      });
  };
};
