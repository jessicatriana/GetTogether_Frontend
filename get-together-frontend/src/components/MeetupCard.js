import React, { Component } from "react";

class MeetupCard extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.meetup.title}</h4>
      </div>
    );
  }
}

export default MeetupCard;
