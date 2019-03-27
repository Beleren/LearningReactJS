import React, { Component } from "react";
import fuba from "../../resources/images/fuba.jpg";

class Bar extends Component {
  state = {};
  render() {
    return <img src={fuba} className="fuba" alt="fuba" />;
  }
}

export default Bar;
