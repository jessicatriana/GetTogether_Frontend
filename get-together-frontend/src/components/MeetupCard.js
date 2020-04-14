import React, { Component } from "react";
import MeetupDetails from "./MeetupDetails";
import ReactCardFlip from "react-card-flip";
class MeetupCard extends Component {
  render() {
    return (
      <div>
        <div className="MeetupCard" onClick={this.handleClick}>
          <h1>{this.props.meetup.title}</h1>
          <h3>Location: {this.props.meetup.location}</h3>
          <h5>Topic: {this.props.meetup.topic.topic_name}</h5>
        </div>

        <div className="MeetupCard" onClick={this.handleClick}>
          <h3>Date: {this.props.meetup.date}</h3>
          <button className="Button">Join Meetup</button>
        </div>
      </div>
    );
  }
}
export default MeetupCard;
