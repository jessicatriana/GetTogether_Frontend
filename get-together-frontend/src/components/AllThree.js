import React, { Component } from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import CenterComponent from "./CenterComponent";
import MeetupDetails from "./MeetupDetails";

class AllThree extends Component {
    
  render() {
    return (
      <div className="AllThree">
        <LeftComponent
          meetups={this.props.meetups}
          comments={this.props.comments}
        />
        <CenterComponent
          meetups={this.props.meetups}
          filteredMeetups={this.props.filteredMeetups}
          joinMeetup={this.props.joinMeetup}
        />
        <MeetupDetails clickedMeetup={this.props.clickedMeetup} />
        {/* <RightComponent user={this.props.user} /> */}
      </div>
    );
  }
}

export default AllThree;
