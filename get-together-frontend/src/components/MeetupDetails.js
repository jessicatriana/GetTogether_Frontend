import React, { Component } from "react";

class MeetupDetails extends Component {
  constructor() {
    super();

    this.state = {
      content: "",
    };
  }

  handleClick = (clickedMeetup) => {
    alert("Meetup Saved!");

    const body = {
      user_id: window.userId,
      meetup_id: clickedMeetup.id,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3000/join", configObj);
  };

  handleCommentChange = (event) => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Comment Submitted!");
    event.preventDefault();

    const body = {
      user_id: window.userId,
      meetup_id: this.props.clickedMeetup.id,
      content: this.state.content,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:3000/comments`, configObj);
    this.setState({
      state: this.state,
    });
    setTimeout(() => {
      this.props.rerender(this.props.clickedMeetup);
    }, 1000);
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
                // console.log(c)
                return <p style={{ textAlign: "center", backgroundColor: "WhiteSmoke" }}>"{c.content}"</p>;
              })}
            <br />
            <button
              className="SignInBtn"
              onClick={() => this.handleClick(this.props.clickedMeetup)}
            >
              Join Meetup
            </button>
            <br />
            <br />
            <form onSubmit={this.handleSubmit}>
              <label> Add a comment about this meetup:</label>
              <br />
              <input
                type="textarea"
                value={this.state.content}
                onChange={this.handleCommentChange}
              ></input>
              <br />
              <input type="submit"></input>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MeetupDetails;
