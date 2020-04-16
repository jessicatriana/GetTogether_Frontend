import React, { Component } from "react";

class MeetupDetails extends Component {
  handleClick = (clickedMeetup) => {
    console.log("button clicked");
    alert("Meetup Saved!")

    const body = { user_id: window.userId, meetup_id: clickedMeetup.id };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3000/join", configObj);
    console.log();
  };

  render() {
    return (
      <div className="MeetupDetails">
        {this.props.clickedMeetup ? (
          <div>
            <h1>{this.props.clickedMeetup.title}</h1>
            Date: {this.props.clickedMeetup.date}
            <br></br>

            Time: {this.props.clickedMeetup.time}
            <br></br>

            Location: {this.props.clickedMeetup.location}

            <h3>Attendees</h3>
            {this.props.clickedMeetup.users &&
              this.props.clickedMeetup.users.map((u) => {
                return <p>{u.first_name}</p>;
              })}

            <h3>Comments </h3>
            {this.props.clickedMeetup.comments &&
              this.props.clickedMeetup.comments.map((c) => {
                return <p style={{textAlign: "left"}}>"{c.content}"</p>;
              })}
  <br/>
            <button
              className="Submit"
              onClick={() => this.handleClick(this.props.clickedMeetup)}
            >
              Join Meetup
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MeetupDetails;
