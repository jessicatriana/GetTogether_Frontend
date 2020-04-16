import React, { Component } from "react";
import MeetupCard from "./MeetupCard";

class LeftComponentProfile extends Component {
  constructor() {
    super();

    this.state = {
      usermeetups: [],
      refreshed: false,
    };
  }

  componentDidMount() {
    this.setState({
      usermeetups: this.props.userMeetups,
    });
  }

  leaveMeetup = (meetup) => {
    console.log("leave button clicked");
    alert("Meetup removed!")
    const body = { user_id: window.userId, meetup_id: meetup.id };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    this.setState({
      state: this.state,
    });

    fetch("http://localhost:3000/usermeetup/delete", configObj);
    this.props.rerender();
  };

  render() {
    console.log(this.props.userMeetups);
    return (
      <div className="LeftComponent">
        <h1>Your Meetups</h1>
        {this.props.userMeetups &&
          this.props.userMeetups.map((m) => {
            return (
              <MeetupCard
                key={m.id}
                meetup={m}
                leaveMeetup={this.leaveMeetup}
              />
            );
          })}
      </div>
    );
  }
}
export default LeftComponentProfile;
