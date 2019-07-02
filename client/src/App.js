import React from "./node_modules/react";
import { BrowserRouter as Router, Route, Switch } from "./node_modules/react-router-dom";
import Home from "./pages/Home";
import AdvancedSearch from "./pages/AdvancedSearch";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
