import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense } from "react";
import Home from "./Home";
import Foo from "./examples/Foo";
import Header from "./Header";
import Bar from "./examples/Bar";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/ba" component={Bar} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
