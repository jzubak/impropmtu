const axios = require('axios');

//this is the kiwi api search
let start = "PHL";
let end = "LAX";

//format in DD/MM/YYYY
let depart = "08/01/2019";
let returnn = "09/01/2019";

// Make a request from Kiwi
axios.get(`https://api.skypicker.com/flights?flyFrom=${start}&to=${end}&dateFrom=${depart}&dateTo=${returnn}&partner=picky`)
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

    //this is to move the EtsyApi call off the client side
    app.post("/api/etsy", function (req, res) {
        console.log("etsy call hit");
        var api_key = "oqtjkj73z380crm3r8ia8jbd";
        var terms = "bohemian";
        var etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords=" +
          terms + "&category=furniture&limit=12&includes=Images:1&api_key=" + api_key;
        axios({
          method: 'post',
          url: etsyURL,
          responseType: 'jsonp'
        })
          .then(function (data){
            console.log("etsy function")
            console.log(data.data)
            var string = JSON.stringify(data.data);
            var newString = string.slice(5);
            // newString.length = newString.length -20;
            console.log(newString)
            // console.log(obj.ok)
            res.send(newString)
          });
        });

  module.exports =  axios
