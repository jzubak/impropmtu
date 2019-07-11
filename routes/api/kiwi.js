const axios = require('axios');

//this is the kiwi api search
let startLocal = "PHL";
let endLocal = "ATL";

//format in DD/MM/YYYY
let departDate = "01/09/2019";
let returnDate = "03/09/2019";

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