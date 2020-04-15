import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import Footer from "./Footer";
import ProfileNavBar from "./ProfileNavBar";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      email: "",
      password: "",
      loggedIn: false,
    };
  }

  handleNameChange = (event) => {
    this.setState({ first_name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const body = this.state;

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:3000/users/login`, configObj)
      .then((resp) => resp.json())
      .then((user) => {

        if (user.id === undefined || user.id === 0) {
          console.log("Not logged in");
        } else {
          console.log("login");
          this.setState({ loggedIn: true });
          window.userId = user.id;
        }
      });
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to="/main" things={this.state} />
    ) : (
      <div>
        THIS IS THE SIGN IN PAGE
        <div className="NavBar">
          <ProfileNavBar />
          <SearchContainer />
          <div className="Logo">
            <img src="/logo1.png" alt="logo" width="100" />
          </div>
        </div>
        <div className="Signin">
          <h1>Sign In</h1>

          <form onSubmit={this.handleSubmit}>
            <label>First Name:</label>
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.handleNameChange}
            />
            <br />
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <label>Password:</label>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            <br />
            <input type="submit" className="Submit" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signin;
