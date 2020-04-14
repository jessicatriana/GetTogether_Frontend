import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SearchContainer from "./SearchContainer";
import AllThree from "./AllThree";

const userId = 0;

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      meetups: [],
      searchWord: "",
    };
  }

  componentDidMount() {
    const API = "http://localhost:3000/meetups";
    fetch(API)
      .then((response) => response.json())
      .then((meetups) => {
        this.setState({ meetups });
      });

      // USE this to login in and perist users to the db
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          user: {
            first_name: "jan",
            email: "jan@jan.com",
            password: "j",
          }
        })
      })
        .then(r => r.json())
        .then(console.log)
  }




  handleChange = (event) => {
    console.log("Event Target Value is", event.target.value);
    this.setState({
      searchWord: event.target.value,
    });
  };

  render() {
    const filteredMeetups = this.state.meetups.filter((meeting) =>
      meeting.topic.topic_name.includes(
        this.state.searchWord ||
          this.state.searchWord.charAt(0).toUpperCase() +
            this.state.searchWord.slice(1)
      )
    );

    return (
      <div>
        THIS THE MAIN PAGE
        <NavBar
          searchWord={this.state.searchWord}
          handleChange={this.handleChange}
        />
        <SearchContainer />
        <AllThree
          meetups={this.state.meetups}
          filteredMeetups={filteredMeetups}
        />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
