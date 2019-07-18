import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, Date } from "../components/Form";
import BackgroundImage from "../components/BackgroundImage"
// import AutoCompleteButton from "../components/AutoCompleteButton"
import "./Style.css";
import axios from "axios";

const tags = ["Beach", "Urban", "Hiking", "Food", "Nightlife", "Historic", "Ski", "Quiet", "KidFriendly"];
const level = ["0-1 stars", "2-3 stars", "4-5 stars"]

class AdvancedSearch extends Component {
  state = {
    from: "",
    fromcity: "",
    autoCompleteClicked: false,
    Box: false,
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
    city1: [],
    code1: [],
  };

  showState = event => {
    event.preventDefault(
      console.log(this.state)
    )
  }

  componentDidMount(){
    this.pullfromlocalstorage()
  }

  pullfromlocalstorage () {
    if (localStorage.getItem("from") === null){
      console.log ("We did it?")
    }
    else {
      this.setState({
        from: localStorage.getItem("from"),
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
      })
    }
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

  handleInputChangeFrom = event => {
    const { value } = event.target;
    this.setState({
      fromcity: value,
      autoCompleteClicked: false,
      Box: true,
    });
    this.airportCoder(value)
  };

  handleInputChange= event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleAutoComplete = event => {
    event.preventDefault()
    const { value , name } = event.target;
    this.setState({
      from: value,
      fromcity: name,
      autoCompleteClicked: true,
      Box: false,
    })
  }

  airportCoder = (userCityInput) => {
  axios.get(`http://aviation-edge.com/v2/public/autocomplete?key=98ea47-bcf82a&city=${userCityInput}`)
  .then((response) => {
    console.log(response.data)
    let citiesarray = []
    let codearray = []
    for (var i = 0; i < response.data.cities.length; i++) {
      citiesarray.push( response.data.cities[i].nameCity + ', ' + response.data.cities[i].codeIso2Country + ' (' + response.data.cities[i].codeIataCity + ")" )
      codearray.push(response.data.cities[i].codeIataCity)
    }
    console.log(citiesarray)
    this.setState({
      city1 : citiesarray,
      code1 : codearray,
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

  handleFormSubmit = event => {
    event.preventDefault();
    const values = Object.values(this.state)
    const keys = Object.keys(this.state)
    console.log("values:" + values)
    console.log("keys" + keys)
    for (var i = 0; i < values.length; i++) {
      if (values[i] === "1") {
        this.state.selectedTags.push(keys[i])
      }
    }
    if (this.state.from && this.state.depart) {
      API.saveTrip({
        from: this.state.from,
        depart: this.state.depart,
        returnn: this.state.returnn,
        budget: this.state.budget,
        Beach: this.state.Beach,
        Urban: this.state.Urban,
        Hiking: this.state.Hiking,
        Food: this.state.Food,
        Nightlife: this.state.Nightlife,
        Historic: this.state.Historic,
        Ski: this.state.Ski,
        Quiet: this.state.Quiet,
        KidFriendly: this.state.KidFriendly,
        level: this.state.level
      }).then(kiwi => {
        let kiwidata = kiwi.data
        this.props.handleInfo(kiwidata)
      })
      .catch(err => console.log(err));
    }
    localStorage.clear();
    localStorage.setItem("fromcity" , this.state.fromcity,);
    localStorage.setItem("from", this.state.from,);
    localStorage.setItem("depart" , this.state.depart,);
    localStorage.setItem("returnn" , this.state.returnn,);
    localStorage.setItem("budget" , this.state.budget,);
    localStorage.setItem("Beach" , this.state.Beach,);
    localStorage.setItem("Urban" , this.state.Urban,);
    localStorage.setItem("Hiking" , this.state.Hiking,);
    localStorage.setItem("Food" , this.state.Food,);
    localStorage.setItem("Nightlife" , this.state.Nightlife,);
    localStorage.setItem("Historic" , this.state.Historic,);
    localStorage.setItem("Ski" , this.state.Ski,);
    localStorage.setItem("Quiet" , this.state.Quiet,);
    localStorage.setItem("KidFriendly" , this.state.KidFriendly,);
    localStorage.setItem("selectedTags", this.state.selectedTags,);
    localStorage.setItem("level" , this.state.level,);

  };

  render() {
    return (
      <div>
        <BackgroundImage src={"/images/AdvancedSearchBG.png"}></BackgroundImage>
        <Container maxwidth={"1000px"} padding={"20px"}>
          <Row>
            <Col size="12 md-6">
              <form>
                <div className="font twentypxfont">From:</div>
                <Input
                  value={this.state.fromcity}
                  onChange={this.handleInputChangeFrom}
                  name="fromcity"
                  placeholder="Where do you want to start?"
                  width={"100%"}
                />
                <div className={this.state.Box === false ? "nodisplay" : "autoCompleteBox"} >
                  {this.state.city1.map((item,index) => {
                    const code = this.state.code1[index];
                      return(
                      <button className={this.state.autoCompleteClicked === false ? "display autoCompleteText font" : "nodisplay"} key={item} value={code} name={item} onClick={this.handleAutoComplete}>{item}</button>)
                  })}
                </div>
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
                      value={this.state.returnn}
                      onChange={this.handleInputChange}
                      name="returnn"
                      placeholder="date"
                    />
                  </Col>
                </Row>
                  <div className="font twentypxfont">Budget:</div>
                  <div className="dollarsign font rounded-left">$</div>
                <Input
                  value={this.state.budget}
                  onChange={this.handleInputChange}
                  name="budget"
                  placeholder="How much you got to spend?"
                  width = {"95%"}
                  float = {"right"}
                  borderradius = {"0px 5px 5px 0px"}
                />
              </form>
            </Col>
            <Col size="12 md-6">
              <form>
                <div className="font twentypxfont">What type of trip are you looking for?</div>
                <div>
                  {tags.map(item => (
                    <button id={item} className={this.state[item] === "1" ? "m-1 py-1 px-2 bg-light radius25px border2px font twentypxfont blueborder pointer focus blue" : "m-1 py-1 px-2 bg-light radius25px border2px font twentypxfont blueborder pointer focus"} value={item} key={item} onClick={this.handleTag}>{item}</button>
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
                 <Link className="white" to="/Results">SEARCH</Link>
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