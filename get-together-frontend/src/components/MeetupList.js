import React, { Component } from "react";
import TestCard from "./TestCard";

class MeetupList extends Component {
  render() {
    return (
      <div className="MeetupList">
        <div className="columns">
          <div className="column">
            {" "}
            {this.props.meetups.map((meetup) => {
              return (
                <TestCard
                  key={meetup.id}
                  meetup={meetup}
                  joinMeetup={this.props.joinMeetup}
                  
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MeetupList;
