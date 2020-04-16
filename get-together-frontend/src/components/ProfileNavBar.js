import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class ProfileNavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="Logo">
          <img src="/logo6.png" alt="logo" width="300" />
        </div>
        <div className="SearchBar"></div>
        <div className="NavLinks">
          <NavLink to="/signup" exact activeStyle={{ color: "blue" }}>
            Sign Up
          </NavLink>
          <br></br>
          <NavLink to="/signin" exact activeStyle={{ color: "blue" }}>
            Login
          </NavLink>
        </div>
      </div>
    );
  }
}
export default ProfileNavBar;
