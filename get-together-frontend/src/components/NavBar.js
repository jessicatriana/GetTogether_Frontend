import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import SearchBar from "./SearchBar";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="Logo">
          <img src="/logo6.png" alt="logo" width="300" />
        </div>
        <div className="SearchBar">
          <SearchBar
            searchWord={this.props.searchWord}
            handleChange={this.props.handleChange}
          />
        </div>
        <div className="NavLinks">
          
          <NavLink to="/main" exact activeStyle={{ color: "blue" }}>
            Home
          </NavLink>
          <br></br>
          <NavLink to="/profile" exact activeStyle={{ color: "blue" }}>
            Profile
          </NavLink>
          <br></br>
          <NavLink to="/signin" exact activeStyle={{ color: "blue" }}>
            Log Out
          </NavLink>
        </div>
      </div>
    );
  }
}
export default NavBar;
