import React from "react";
import Arrow from "../../images/Arrow.png"
import "./style.css"


function OtherOptions({ flightsInfo }) {

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

    return(
        <div>
            {flightsInfo.map(item => (
                <div className="font">
                    <div className="floatleft mr-2">
                        {item.airlineIATA}
                    </div>
                    <div className="floatleft mr-2">
                        {convertTimestamp(item.departureTime)}
                    </div>
                    <div className="floatleft mr-3 arrow">
                        <img src={Arrow} alt="arrow" className="arrow"></img>
                    </div>
                    <div className="floatleft mr-3">
                        {convertTimestamp(item.departureTime)}
                    </div>
                    <div className="floatleft mr-1">
                        {item.flightTime}
                    </div>
                    <div className="floatleft mr-2">
                        ${item.prices}
                    </div>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default OtherOptions