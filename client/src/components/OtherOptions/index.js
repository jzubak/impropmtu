import React from "react";
import Arrow from "../../images/Arrow.png"
import "./style.css"


function OtherOptions({ flightsInfo, departurecode , arrivalcode }) {

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
        time = h + ':' + min + ' ' + ampm;
        return time;
    }

    function getAirlineNameJanky (iataCode){
        if (iataCode === "NK"){
            return "Spirit Airlines"
        }
        if (iataCode === "F9"){
            return "Frontier Airlines"
        }
        if (iataCode === "AA"){
            return "American Airlines"
        }
        if (iataCode === "UA"){
            return "United Airlines"
        }
        if (iataCode === "DL"){
            return "Delta Airlines"
        }
        if (iataCode === "G4"){
            return "Allegiant Airlines"
        }
        if (iataCode === "AS"){
            return "Alaskan Airlines"
        }
        if (iataCode === "WN"){
            return "Southwest Airlines"
        }
        if (iataCode === "B6"){
            return "Jet Blue"
        }
        if (iataCode === "HA"){
            return "Hawaian Airlines"
        }
        else {
            return (iataCode)
        }

    }

    return(
        <div>
            {flightsInfo.map(item => (
                <div className="row font">
                    <div className="floatleft col-4">
                        {getAirlineNameJanky(item.airlineIATA)}
                    </div>
                    <div className="col-6"> 
                        <div className="floatleft mr-1">
                            <div className="floatleft mr-1">{convertTimestamp(item.departureTime)}</div><strong>{departurecode}</strong>
                        </div>
                        <div className="floatleft mr-1 arrow">
                            <img src={Arrow} alt="arrow" className="arrow"></img>
                        </div>
                        <div className="floatleft">
                            <div className="floatleft mr-1">{convertTimestamp(item.arrivalTime)}</div> <strong>{arrivalcode}</strong>
                        </div>
                    </div>
                        <div className="floatleft mr-1">
                            {item.flightTime}
                        </div>
                        <div className="floatleft mr-1">
                            <strong>${item.prices}</strong>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default OtherOptions