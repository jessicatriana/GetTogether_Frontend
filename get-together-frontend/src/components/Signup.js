import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import Footer from "./Footer";
import ProfileNavBar from "./ProfileNavBar";
import Checkboxes from "./Checkboxes";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      email: "",
      password: "",
      loggedIn: false,
      topicArray: [],
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

    fetch(`http://localhost:3000/signup`, configObj)
      .then((resp) => resp.json())
      .then((user) => {
        console.log("Body0", body);
        if (user.id === undefined || user.id === 0) {
          console.log("Not logged in");
          console.log("Topic Array1", this.state.topicArray);
          console.log("Body1", body);
        } else {
          console.log("login");
          console.log("Topic Array2", this.state.topicArray);
          console.log("Body2", body);
          this.setState({ loggedIn: true });
          window.userId = user.id;
        }
      });
    console.log("Topic Array3", this.state.topicArray);
    console.log("Body4", body);
  };

  handleTopicClick = (topic) => {
    this.setState({
      topicArray: [...this.state.topicArray, topic],
    });
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to="/main" things={this.state} />
    ) : (
      <div>
        THIS IS THE SIGN UP PAGE
        <div className="NavBar">
          <ProfileNavBar />
          <SearchContainer />
          <div className="Logo">
            <img src="/logo1.png" alt="logo" width="100" />
          </div>
        </div>
        <div className="Signup">
          <div className="Signin">
            <h1>Create an account:</h1>

            <form onSubmit={this.handleSubmit}>
              <label>First Name:</label>
              <input
              className="SignUpInput"
                type="text"
                value={this.state.first_name}
                onChange={this.handleNameChange}
              />
              <br />
              <label>Email</label>
              <input
               className="SignUpInput"
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <br />
              <label>Password:</label>
              <input
               className="SignUpInput"
                type="text"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <br />
              <br />

              <input type="submit" className="Submit" />
            </form>
          </div>
        </div>
        <div className="Checkboxes">
          <Checkboxes handleTopicClick={this.handleTopicClick} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
