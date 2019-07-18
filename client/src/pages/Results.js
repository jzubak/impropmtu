import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container } from "../components/Grid";
import Parameters from "../components/SearchParameters";
import TripBox from "../components/TripBox";
// import API from "../utils/API";
import BackgroundImage from "../components/BackgroundImage"
import "./Style.css"
// import Axios from "axios";
// import AdvancedSearch from "./AdvancedSearch.js";
// import { create } from "domain";


class Results extends Component {
  state = {
    fromcity: "",
    depart: "",
    returnn: "",
    budget: "",
    Beach: "0",
    Urban: "0",
    Hiking: "0",
    Food: "0",
    Nightlife: "0",
    Historic: "0",
    Ski: "0",
    Quiet: "0",
    KidFriendly: "0",
    selectedTags: [],
    level: "",
    // flights: {}
  };

  componentDidMount() {
    this.pullfromlocalstorage()
  }


  pullfromlocalstorage() {
    this.setState({
      fromcity: localStorage.getItem("fromcity"),
      depart: localStorage.getItem("depart"),
      returnn: localStorage.getItem("returnn"),
      budget: localStorage.getItem("budget"),
      Beach: localStorage.getItem("Beach"),
      Urban: localStorage.getItem("Urban"),
      Hiking: localStorage.getItem("Hiking"),
      Food: localStorage.getItem("Food"),
      Nightlife: localStorage.getItem("Nightlife"),
      Historic: localStorage.getItem("Historic"),
      Ski: localStorage.getItem("Ski"),
      Quiet: localStorage.getItem("Quiet"),
      KidFriendly: localStorage.getItem("KidFriendly"),
      level: localStorage.getItem("level"),
      selectedTags: localStorage.getItem("selectedTags").split(","),
    });
  }

  showState = event => {
    event.preventDefault(
      console.log(this.state),
      console.log(this.props.flightInfo),
      console.log(this.props.flightInfo.departures),
      console.log(this.props.flightInfo.departures[1]),
      console.log(this.props.flightInfo.departures[1].destinationIATA),
      console.log(this.props.flightInfo.departures[1].startingIATA),
      console.log(this.props.flightInfo.departures[1].flights[1].prices),
      console.log(this.props.flightInfo.departures[1].flights[1].airlineIATA),
    )
  }

  // loadTrips = () => {
  //   API.getTrips()
  //     .then(res =>
  //       this.setState({ Trips: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <BackgroundImage src={"/images/ResultsBG.jpg"}></BackgroundImage>
        <Container padding={"10px"} maxwidth={"1000px"}>
          <Parameters
            from={this.state.fromcity}
            depart={this.state.depart}
            returnn={this.state.returnn}
            budget={this.state.budget}
            level={this.state.level}
            tags={this.state.selectedTags}
          />
        </Container>
        {/* I wanna see words here {this.props.flightInfo.departures[0].flights[0].airlineIATA} */}

        <TripBox flightsInfo={this.props.flightInfo}/>

        {/* <button onClick={this.pullfromlocalstorage}>Run Function</button> */}
        {/* <button onClick={this.showState}>show state</button> */}

      </div>
    );
  }
}

export default Results;
