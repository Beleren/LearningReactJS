import React, { Component } from "react";
import logo from "../le-potato.jpg";
import "../App.css";
import Header from "./Header";
// https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
