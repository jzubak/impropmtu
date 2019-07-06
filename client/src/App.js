import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
import Results from "./pages/Results"
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
          <Route exact path="/Results" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
