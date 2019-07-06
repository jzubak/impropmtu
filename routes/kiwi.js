const axios = require('axios');

let start = "PHL";
let end = "LAX";

//format in DD/MM/YYYY
let leave = "08/01/2019";
let returnn = "09/01/2019";

// Make a request from Kiwi
axios.get(`https://api.skypicker.com/flights?flyFrom=${start}&to=${end}&dateFrom=${leave}&dateTo=${returnn}&partner=picky`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function (SearchResults) {
    response.JSON.stringify(SearchResults)
  });


  module.exports =  axios