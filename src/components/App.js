import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense } from "react";
import Home from "./Home";
import Foo from "./Foo";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
