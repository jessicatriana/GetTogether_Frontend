import React, { Component } from "react";
import MainPage from './MainPage'
import { Redirect } from 'react-router-dom'

class Signin extends Component {
  constructor(props) {
      super(props)
    this.state = {
      first_name: "",
      email: "",
      password: "",
      loggedIn: false
    };

  }

  handleNameChange = (event) => {
    this.setState({ first_name: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.first_name);
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
        // console.log(user);
        if (user.id === undefined || user.id === 0) {
            console.log("Not logged in")
        } else {
        console.log("login")
            this.setState({ loggedIn: true})
            window.userId = user.id
        }
    }
         )
}



  render() {
   
    return (
        this.state.loggedIn ?  <Redirect to='/main' things={this.state}/> : 
      <div>
        Sign In
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.handleNameChange}
          />
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <label>Password:</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input type="submit"/>
        </form>
      </div>
       
    );
  };
};

export default Signin;
