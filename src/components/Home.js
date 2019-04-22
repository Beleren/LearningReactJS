import React, { Component } from "react";
import logo from "../resources/images/le-potato.jpg";
import "../css/App.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Vamos ver o que vai dar essa bagaça.</p>
          <a
            className="App-link"
            href="https://github.com/Beleren"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github da desgraça
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
