import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
import Results from "./pages/Results"
import Nav from "./components/Nav";
import "./style.css"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <Router>
      <div className="content">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
          <Route exact path="/Results" component={Results} />
        </Switch>
      </div>
    </Router>
    <Footer></Footer>
    </div>
  );
}

export default App;
