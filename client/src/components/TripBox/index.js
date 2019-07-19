import React from "react";
import { Container, Row, Col } from "../Grid";
import BookButton from "../BookButton"
import OtherOptions from "../OtherOptions"
import Arrow from "../../images/Arrow.png"
import "./style.css"
// import axios from "axios";

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
        time = h + ':' + min + ' ' + ampm;
        return time;
    }

    // let airlineName = []
    // let airlineName = ""

    // function getAirlineName (iataCode) {
    //       axios.get(`https://aviation-edge.com/v2/public/airlineDatabase?key=98ea47-bcf82a&codeIataAirline=${iataCode}`)
    //         .then((response) => {
    //             console.log(iataCode)
    //             console.log("response" , response)
    //             airlineName = response.data[0].nameAirline
    //             console.log(airlineName)
    //             return airlineName  
    //         })
    // }

    // console.log(airlineName)

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

    if (flightsInfo.departures === undefined) {
        console.log("yay")
        return (                     
            <Container maxwidth={"125px"} padding={"12px"}>
                <div className="twentypxfont font">Searching</div>
            </Container>)
    }
    else {
        return (
            <div>
                {flightsInfo.departures.map((item, index) => {
                    const returns = flightsInfo.returns[index]; 
                    // const airlines = airlineName[index];
                    // console.log("item", item)
                    // console.log("returns", returns)
                    // console.log("airlines", airlines)
                    if (item.startingIATA === item.destinationIATA) {
                        return null;
                    }
                    else {
                        return (
                            <Container maxwidth={"1000px"} padding={"12px"} key={item.destinationIATA}>
                                <Row>
                                    <Col size="12">
                                        <div className="font">
                                            <div>
                                                <div>
                                                    <strong className="twentypxfont">{item.flights[0].destinationCity} ({item.destinationIATA}) </strong> for ${item.flights[0].prices + returns.flights[0].prices}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2 floatleft mr-4">
                                                    {getAirlineNameJanky(item.flights[0].airlineIATA)}
                                                </div>
                                                <div className="col-4">
                                                    <div className="floatleft mr-1">
                                                        {convertTimestamp(item.flights[0].departureTime)}
                                                    </div>
                                                    <div className="floatleft mr-1">
                                                    <strong> {item.startingIATA} </strong> 
                                                    </div>
                                                    <div className="floatleft mr-1 arrow">
                                                        <img src={Arrow} alt="arrow" className="arrow"></img>
                                                    </div>
                                                    <div className="floatleft mr-1">
                                                    {convertTimestamp(item.flights[0].arrivalTime)}
                                                    </div>
                                                    <div className="floatleft mr-4">
                                                        <strong>{item.destinationIATA}</strong>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="floatleft mr-1">
                                                        ({item.flights[0].flightTime})
                                                    </div>
                                                    <div className="floatleft mr-2">
                                                        <strong>${item.flights[0].prices}</strong>
                                                    </div>
                                                </div>
                                                <div className="col-3 dropdownparent"> 
                                                    Show Other Options
                                                    <div className="dropdown2"> 
                                                        <OtherOptions 
                                                            flightsInfo={item.flights}
                                                            departurecode = {item.startingIATA}
                                                            arrivalcode = {item.destinationIATA}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="floatright">
                                                    <BookButton link={item.flights[0].bookingLink} />
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-2 floatleft mr-4">
                                                    {getAirlineNameJanky(returns.flights[0].airlineIATA)}
                                                </div>
                                                <div className="col-4">
                                                    <div className="floatleft mr-1">
                                                        {convertTimestamp(returns.flights[0].departureTime)}
                                                    </div>
                                                    <div className="floatleft mr-21">
                                                    <strong> {returns.startingIATA} </strong> 
                                                    </div>
                                                    <div className="floatleft mr-1 arrow">
                                                        <img src={Arrow} alt="arrow" className="arrow"></img>
                                                    </div>
                                                    <div className="floatleft mr-1">
                                                    {convertTimestamp(returns.flights[0].arrivalTime)}
                                                    </div>
                                                    <div className="floatleft mr-4">
                                                        <strong>{returns.destinationIATA}</strong>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="floatleft mr-1">
                                                        ({returns.flights[0].flightTime})
                                                    </div>
                                                    <div className="floatleft mr-2">
                                                        <strong>${returns.flights[0].prices}</strong>
                                                    </div>
                                                </div>
                                                <div className="col-3 dropdownparent"> 
                                                    Show Other Options
                                                    <div className="dropdown2"> 
                                                        <OtherOptions 
                                                            flightsInfo = {returns.flights}
                                                            departurecode = {returns.startingIATA}
                                                            arrivalcode = {returns.destinationIATA}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="floatright">
                                                    <BookButton link={returns.flights[0].bookingLink} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    }
                })}
            </div>
        );

    }
}

export default TripBox