import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, Date } from "../components/Form";

const tags = ["Beach", "Urban", "Hiking", "Food", "Nightlife", "Historic", "Music", "Quiet", "KidFriendly"];
const level = ["0-1", "2-3", "4-5"]

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
    Music: "0",
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
    console.log("value: " + value)
    console.log("tsv:")
    console.log(this.state[value])
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
    console.log(this.state)
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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.from}
                onChange={this.handleInputChange}
                name="from"
                placeholder="Where do you want to start?"
              />
              <Date
                value={this.state.depart}
                onChange={this.handleInputChange}
                name="depart"
                placeholder="date"
              />
              <Date
                value={this.state.return}
                onChange={this.handleInputChange}
                name="return"
                placeholder="date"
              />
              <Input
                value={this.state.budget}
                onChange={this.handleInputChange}
                name="budget"
                placeholder="How much you got to spend?"
              />
              <div>
                {tags.map(item => (
                  <button value={item} key={item} onClick={this.handleTag}>{item}</button>
                ))}
              </div>
              <div>
                {level.map(item => (

                  <button value={item} key={item} onClick={this.handleLevel}>{item}</button>
                ))}
              </div>
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                GO
              </FormBtn>
              <button onClick={this.showState}>show state</button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdvancedSearch;