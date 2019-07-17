import React from "react";
import axios from "axios";


function TripBox({ flightsInfo }) {
    console.log("flightsInfo:")
    console.log(flightsInfo)
    console.log(flightsInfo.departures)

    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
            ampm = 'am',
            time;
      
            console.log(mm + '-' + dd + '-' + yyyy + ', ' + h + ':' + min + ' ' + ampm);

        if (hh > 12) {
            h = hh - 12;
            ampm = 'pm';
        } else if (hh === 12) {
            h = 12;
            ampm = 'pm';
        } else if (hh === 0) {
            h = 12;
        }
      
        // ie: 2014-03-24, 3:00 PM
        time =  h + ':' + min + ' ' + ampm;
        return time;
      }
      
    let airlineName = []

    function getAirlineName (iataCode){
          axios.get(`https://aviation-edge.com/v2/public/airlineDatabase?key=98ea47-bcf82a&codeIataAirline=${iataCode}`)
            .then((response) => {
                console.log(response)
                airlineName.push(response.data[0].nameAirline)
                console.log(airlineName)
                
            })
    }

    console.log(airlineName)

    if (flightsInfo.departures === undefined) {
        console.log("yay")
        return null
    }
    else {
        console.log("x:" , getAirlineName(flightsInfo.departures[0].flights[0].airlineIATA))
        return (
            <div>
                {flightsInfo.departures.map((item,index) => {
                    const returns = flightsInfo.returns[index];
                    const airlines = airlineName[index];
                    console.log("item", item)
                    console.log("returns", returns)
                    console.log("airlines", airlines)
                    return(
                    <div key={item.destinationIATA}>
                        <div>
                            <div>
                            {item.destinationIATA}
                            </div>
                        </div>
                        <div>
                             {convertTimestamp(item.flights[0].departureTime)} {item.startingIATA} ----------------> {convertTimestamp(item.flights[0].arrivalTime)} {item.destinationIATA}         ({item.flights[0].flightTime}) <div>{airlines}</div>
                        </div>
                        <div>
                            {getAirlineName(returns.flights[0].airlineIATA)} 
                            {convertTimestamp(returns.flights[0].departureTime)} {returns.startingIATA} ----------------> {convertTimestamp(returns.flights[0].arrivalTime)} {returns.destinationIATA}         ({returns.flights[0].flightTime})
                        </div>
                    </div>
                )})}
            </div>
        );
        
    }
}

export default TripBox