import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
import Home from "./Home";

// https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48
class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
