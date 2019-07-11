// $(document).on("click", "#submit", function () {
//     console.log(axios);
//     var start = $("#start").val();
//     var end = $("#end").val();
//     var startDate = $("#startDate").val();
//     var endDate = $("#endDate").val();
//     var passengers = $("#passengers").val();
//     var mpg = $("#mpg").val();
//     // var cityCodeAPI = "dd90a1cf-0df9-40bd-a48b-072177bf02a8"
//     var code = config.flightkey
//     var startCityCodeURL = "http://aviation-edge.com/v2/public/autocomplete?key=" + code + "&city=" + start
//     var endCityCodeURL = "http://aviation-edge.com/v2/public/autocomplete?key=" + code + "&city=" + end

//     axios.get(startCityCodeURL
//     ).then(function (response) {
//         var startObj = {
//             startInfo: (response)
//         }
//         console.log(startObj.startInfo)
//         axios.get(endCityCodeURL
//         ).then(function (response) {
//             var endObj = {
//                 endInfo: (response)
//             }
//             console.log(endObj.endInfo)

//             startAPI = startObj.startInfo.data.cities[0].codeIataCity
//             endAPI = endObj.endInfo.data.cities[0].codeIataCity
//             switch (startAPI) {
//                 case "PHD":
//                     startAPI = "PHL"
//                     break;
//                 case "OES":
//                     startAPI = "SAT"
//                     break;
//                 case "DTL":
//                     startAPI = "DTW"
//                     break;
//             }
//             switch (endAPI) {
//                 case "PHD":
//                     endAPI = "PHL"
//                     break;
//                 case "OES":
//                     endAPI = "SAT"
//                     break;
//                 case "DTL":
//                     endAPI = "DTW"
//                     break;
//             }
//             var flightUrl = "https://api.skypicker.com/aggregation_flights?fly_from=" + startAPI + "&fly_to=" + endAPI + "&v=3&date_from=" + startDate + "&date_to=" + startDate + "&return_from=" + endDate + "&return_to=" + endDate + "&flight_type=round&adults=" + passengers + "&children=0&fly_days=[0,1,2,3,4,5,6]&fly_days_type=departure&ret_fly_days=[0,1,2,3,4,5,6]&ret_fly_days_type=departure&only_working_days=0&only_weekends=0&partner_market=us&curr=USD&locale=en&one_for_city=1&one_per_date=1&max_stopovers=1"
//             axios.get(flightUrl,
//                 {
//                     headers: {
//                         "X-API-Version": "2",
//                         "Content-Type": "application/json",
//                     }
//                 }
//             ).then(function (response) {
//                 console.log(startAPI)
//                 console.log(endAPI)
//                 console.log(flightUrl)
//                 console.log(response.data.data[0].price);
//                 $("#directions-panel").append("<p> Total Flight Cost " + "$" + response.data.data[0].price + "</p>")
//             }).catch(error => {
//                 console.log(error);
//             });
//         })
//     })
//     $('html, body').animate({
//         scrollTop: $("#divBreak").offset().top
//     }, 3000);
// })