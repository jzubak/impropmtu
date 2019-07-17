import React from "react";

function TripBox({ flightsInfo }) {
    console.log("flightsInfo:")
    console.log(flightsInfo)
    console.log(flightsInfo.departures)
    if (flightsInfo.departures === undefined) {
        console.log("yay")
        return null
    }
    else {
        return <div>
        {flightsInfo.departures[0].flights[0].airlineIATA}
    </div>;
        
    }
}

export default TripBox