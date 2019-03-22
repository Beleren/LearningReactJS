import React, { Component } from "react";

class Header extends Component {
  state = {};

  /* Toggle between adding and removing the "responsive" className to topnav when the user clicks on the icon */
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="topnav" id="myTopnav">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">News</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a
            href="javascript:void(0);"
            className="icon"
            onClick={this.myFunction}
          >
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
