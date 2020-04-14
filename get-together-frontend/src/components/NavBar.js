import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import SearchBar from "./SearchBar";


class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="Logo">
        <img src="/logo1.png" alt="logo" width="100"/> 
          </div>
        <div className="SearchBar">
          <SearchBar
            searchWord={this.props.searchWord}
            handleChange={this.props.handleChange}
          />
        </div>
        <div className="NavLinks">
          <NavLink to="/Profile" exact activeStyle={{ color: "blue" }}>
            Profile
          </NavLink>
        </div>
      </div>
    );
  }
}
export default NavBar;
