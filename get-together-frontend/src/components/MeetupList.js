import React, { Component } from "react";
import MeetupCard from "./MeetupCard";

class MeetupList extends Component {
  render() {
      const array1 = this.props.meetups.slice(1, 6)
      const array2 = this.props.meetups.slice(7, 12)

      
    return (
      <div className="MeetupList">
        <h1>All Meetups:</h1>
        <div class="columns">
          <div class="column">
            {" "}
            {array1.map((meetup) => {
              return <MeetupCard key={meetup.id} meetup={meetup} />;
            })}
          </div>
          <div class="column"> {" "}
            {array2.map((meetup) => {
              return <MeetupCard key={meetup.id} meetup={meetup} />;
            })}</div>
        </div>
      </div>
    );
  }
}

export default MeetupList;
