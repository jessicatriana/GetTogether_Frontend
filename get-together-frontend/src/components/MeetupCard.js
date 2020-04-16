import React, { Component } from "react";

class MeetupCard extends Component {

  

  render() {
    return (
      <div>
        <div className="MeetupCard" onClick={this.handleClick}>
          <h3>{this.props.meetup.title}</h3>
          <button className="Submit"
          onClick={() => this.props.leaveMeetup(this.props.meetup)}
          >Leave Meetup</button>

         
        
        </div>
      </div>
    );
  }
}
export default MeetupCard;
