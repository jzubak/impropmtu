import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, Date } from "../components/Form";

class Home extends Component {
  state = {
    from: "",
    depart: "",
    return: "",
    budget: ""
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
              < Date
                value={this.state.depart}
                onChange={this.handleInputChange}
                name="depart"
                placeholder="date"
              />
              < Date
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
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                GO
              </FormBtn>
              <FormBtn>
                <Link to="/AdvancedSearch"> ADVANCED SEARCH </Link>
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
