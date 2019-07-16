import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
import Results from "./pages/Results"
import Nav from "./components/Nav";
import "./style.css"
import Footer from "./components/Footer"

class App extends Component {
  state = {
    searchResults: {},
  }

  handleInfo = (data) => {
    this.setState({
      searchResults: data,
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div className="content">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/AdvancedSearch" render={() => <AdvancedSearch handleInfo={this.handleInfo} />} />
              <Route exact path="/Results" render={() => <Results flightInfo={this.state.searchResults} />} />
            </Switch>
          </div>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
