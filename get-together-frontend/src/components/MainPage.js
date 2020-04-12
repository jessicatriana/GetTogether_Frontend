import React, { Component } from "react";
import MeetupList from './MeetupList'
import NavBar from './NavBar'
import Footer from './Footer'
import SearchContainer from './SearchContainer'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      meetups: [],
    };
  }

  componentDidMount() {
    const API = "http://localhost:3000/meetups";
    fetch(API)
      .then((response) => response.json())
      .then((meetups) => {
        this.setState({ meetups });
      });
  }

  render() {

    return <div>
        Main Page
        <NavBar/>
        <SearchContainer/>
        <LeftComponent />
        <MeetupList meetups={this.state.meetups}/>
        <RightComponent/>
        <Footer />
        </div>;
  }
}

export default MainPage
