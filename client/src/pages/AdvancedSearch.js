import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, Date } from "../components/Form";
import BackgroundImage from "../components/BackgroundImage"
import "./Style.css";

const tags = ["Beach", "Urban", "Hiking", "Food", "Nightlife", "Historic", "Ski", "Quiet", "KidFriendly"];
const level = ["0-1 stars", "2-3 stars", "4-5 stars"]

class AdvancedSearch extends Component {
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
    level: "",
  };

  showState = event => {
    event.preventDefault(
      console.log(this.state)
    )
  }

  handleTag = event => {
    event.preventDefault()
    let { value } = event.target;
    // console.log("value: " + value)
    // console.log("tsv:")
    // console.log(this.state[value])
    if (this.state[value] === "0") {
      this.setState({
        [value]: "1"
      })
    }
    else {
      this.setState({
        [value]: "0"
      })
    }
  }

  handleLevel = event => {
    event.preventDefault()
    const { value } = event.target;
    this.setState({
      level: value
    })
    // console.log(this.state)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.from && this.state.depart) {
      API.saveTrip({
        from: this.state.from,
        depart: this.state.depart,
        return: this.state.return,
        budget: this.state.budget,
        Beach: this.state.Beach,
        Urban: this.state.Urban,
        Hiking: this.state.Hiking,
        Food: this.state.Food,
        Nightlife: this.state.Nightlife,
        Historic: this.state.Historic,
        Music: this.state.Music,
        Quiet: this.state.Quiet,
        KidFriendly: this.state.KidFriendly,
        level: this.state.level
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <BackgroundImage src={"/images/AdvancedSearchBG.png"}></BackgroundImage>
        <Container fluid maxwidth={"1000px"}>
          <Row>
            <Col size="12 md-6">
              <form>
                <div className="font twentypxfont">From:</div>
                <Input
                  value={this.state.from}
                  onChange={this.handleInputChange}
                  name="from"
                  placeholder="Where do you want to start?"
                />
                <Row>
                  <Col size="6">
                    <div className="font twentypxfont">Start Date:</div>
                    <Date
                      value={this.state.depart}
                      onChange={this.handleInputChange}
                      name="depart"
                      placeholder="date"
                      
                    />
                  </Col>
                  <Col size="6">
                    <div className="font twentypxfont">End Date:</div>
                    <Date
                      value={this.state.return}
                      onChange={this.handleInputChange}
                      name="return"
                      placeholder="date"
                    />
                  </Col>
                </Row>
                  <div className="font twentypxfont">Budget:</div>  
                <Input
                  value={this.state.budget}
                  onChange={this.handleInputChange}
                  name="budget"
                  placeholder="How much you got to spend?"
                />
              </form>
            </Col>
            <Col size="12 md-6">
              <form>
                <div className="font twentypxfont">What type of trip are you looking for?</div>
                <div>
                  {tags.map(item => (
                    <button id={item} className={this.state[item] === "0" ? "m-1 py-1 px-2 bg-light radius25px border2px font twentypxfont blueborder pointer focus" : "m-1 py-1 px-2 bg-light radius25px border2px font twentypxfont blueborder pointer focus blue"} value={item} key={item} onClick={this.handleTag}>{item}</button>
                  ))}
                </div>
                <div className="font twentypxfont">What are your standards?</div>
                <div>
                  {level.map(item => (
                    <button className={this.state.level === item ? "m-1 py-1 px-2 bg-light radius25px border2px font twentypxfont blueborder pointer focus blue" : "m-1 py-1 px-2 bg-light radius25px border2px font twentypxfont blueborder pointer focus"} value={item} key={item} onClick={this.handleLevel}>{item}</button>
                  ))}
                </div>
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  GO
                </FormBtn>
                {/* <button onClick={this.showState}>show state</button> */}
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdvancedSearch;