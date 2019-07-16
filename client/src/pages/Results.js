import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Parameters from "../components/SearchParameters";
// import TripBox from "../components/TripBox";
import API from "../utils/API";
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
    flights: {}
  };

  componentDidMount() {
    this.pullfromlocalstorage()
    this.setState({
      flights: this.props.flightInfo
    }
    )
    // Axios.get(AdvancedSearch)
    //   .then(kiwi=>this.setState({
    //     data: kiwi
    //   }))
    // this.loadTrips()
    // console.log(this.state)
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
      // kiwi: JSON.parse(localStorage.getItem('kiwi'))
    });
  }

  showState = event => {
    event.preventDefault(
      console.log(this.state),
      console.log(this.props.flightInfo)
    )
  }


  // createSelTags = () => {
  //   const values = Object.values(this.state)
  //   const keys = Object.keys(this.state)
  //   console.log("values:" + values)
  //   console.log("keys" + keys)
  //   for (var i = 0; i < values.length; i++) {
  //     if (values[i] === "1") {
  //       this.state.selectedTags.push(keys[i])
  //     }
  //   }

  // }

  loadTrips = () => {
    API.getTrips()
      .then(res =>
        this.setState({ Trips: res.data })
      )
      .catch(err => console.log(err));
  };

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
        <Container>
          <Row>
            <Col size="md-12">
              I wanna see words here {this.props.flightInfo}
              {/* {this.state.Trips.map(trip => (
                <TripBox
                  key={trip._id}
                  destination={trip.destination}
                  img={trip.img}
                  flight={trip.flight}
                  flightPrice={trip.flightPrice}
                  hotelPrice={trip.hotelPrice}
                  totalPrice={trip.totalPrice}
                >
                  <Link to={"/Trips/" + trip._id} > See Details </Link>
                </TripBox>
              ))} */}
            </Col>
          </Row>
          {/* <button onClick={this.pullfromlocalstorage}>Run Function</button> */}
          <button onClick={this.showState}>show state</button>
        </Container>
      </div>
    );
  }
}

export default Results;
