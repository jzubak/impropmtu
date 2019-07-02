import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Tag from "../components/Tag"
import Button from "../components/button";

const tags = ["Beach", "Urban", "Hiking", "Food", "Nightlife", "Sports" , "Music", "LaidBack", "Ski"];
const level = ["0-1","2-3","4-5"]

class AdvancedSearch extends Component {
  state = {
    from: "",
    depart: "",
    return: "",
    budget: "",
    Beach: "0",
    Urban: "0",
    Hiking: "0",    
    Food: "0",
    Nightlife: "0",
    Sports: "0",
    Music: "0",
    LaidBack: "0",
    Ski: "0",
    level: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.from && this.state.depart) {
      API.savetrip({
        from: this.state.from,
        depart: this.state.depart,
        return: this.state.return,
        budget: this.state.budget
      })
        .then(res => this.loadBooks())
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
              <Input
                value={this.state.depart}
                onChange={this.handleInputChange}
                name="depart"
                placeholder="date"
              />
              <Input
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
              <Tag 
                tag = {item}
                id = {item}
              />
              ))}
              </div>
              <div>
              {level.map(item => (
              <Button 
                level = {item}
                id = {item}
              />
              ))}
              </div>
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                GO
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdvancedSearch;