import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/shapes.css";

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
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        /> */}
        <div className="topnav" id="myTopnav">
          <Link to="/" isActive={false}>
            Home
          </Link>
          <NavLink to="/foo">Foo</NavLink>
          <NavLink to="/ba">Ba</NavLink>
          <a className="icon" onClick={this.myFunction}>
            {/* <i className="fa fa-bars" /> */}
            <div className="triangle-down" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
