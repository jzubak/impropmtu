import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Parameters from "../components/SearchParameters";
import TripBox from "../components/TripBox";
import API from "../utils/API";

class Results extends Component {
  state = {
    Parameters : {
      from: "",
      depart: "",
      return: "",
      budget: "",
      Beach: "0",
      Urban: "0",
      Hiking: "0",    
      Food: "0",
      Nightlife: "0",
      Historic: "0",
      Music: "0",
      Quiet: "0",
      KidFriendly: "0",
      level: "",
    },
    Trips : []
  };


  loadTrips = () => {
    API.getTrips()
      .then(res =>
        this.setState({ Trips: res.data})
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Parameters/>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {this.state.Trips.map(trip => (
            <TripBox
              key={trip._id}
                destination = {trip.destination}
                img = {trip.img}
                flight = {trip.flight}
                flightPrice = {trip.flightPrice}
                hotelPrice = {trip.hotelPrice}
                totalPrice = {trip.totalPrice}
            >
              <Link to={"/Trips/" + trip._id} > See Details </Link>
            </TripBox>
          ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;
