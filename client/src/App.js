import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
import Results from "./pages/Results"
import Nav from "./components/Nav";
import "./style.css"
import Footer from "./components/Footer"
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

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
      <div className="App">
        <Router>
          <div className="content">

              <header>
                <Nav />
              </header>

            <Switch>
              <PrivateRoute path="/profile" component={Profile} />
              <Route exact path="/" render={() => <AdvancedSearch handleInfo={this.handleInfo} />} />
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
