import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Parameters from "../components/SearchParameters";
import TripBox from "../components/TripBox";
import API from "../utils/API";
import BackgroundImage from "../components/BackgroundImage"
import "./Style.css"
// import { create } from "domain";


class Results extends Component {
  state = {
    from: "",
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
    Trips: []
  };

  componentDidMount() {
    this.pullfromlocalstorage()
    this.loadTrips()
    console.log(this.state)
  }

  pullfromlocalstorage() {
    this.setState({
      from: localStorage.getItem("from"),
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
      SelectedTags: localStorage.getItem("SelectedTags")
    });
  }

  showState = event => {
    event.preventDefault(
      console.log(this.state)
    )
  }

  createSelTags = () => {
    const values = Object.values(this.state)
    const keys = Object.keys(this.state)
    console.log("values:" + values)
    console.log("keys" + keys)
    for (var i = 0; i < values.length; i++) {
      if (values[i] === "1") {
        this.state.selectedTags.push(keys[i])
      }
    }

  }

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
            from={this.state.from}
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
              {this.state.Trips.map(trip => (
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
              ))}
            </Col>
          </Row>
          <button onClick={this.createSelTags}>Run Function</button>
          <button onClick={this.showState}>show state</button>
        </Container>
      </div>
    );
  }
}

export default Results;
