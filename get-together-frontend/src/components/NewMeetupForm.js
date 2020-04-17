import React, { Component } from "react";

class NewMeetupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      time: "",
      location: "",
      image: "",
      topic_id: 0,
      user_id: window.userId,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  };

  handleTimeChange = (event) => {
    this.setState({ time: event.target.value });
  };

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleImgURLChange = (event) => {
    this.setState({ image: event.target.value });
  };

  handleTopicChange = (event) => {
    this.setState({ topic_id: parseInt(event.target.value) });
  };

  handleSubmit = (event) => {
    alert("Meetup Created!");
    event.preventDefault();
    const body = this.state;

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:3000/meetups`, configObj);
    this.setState({
      state: this.state,
    });
    setTimeout(() => {
      this.props.rerender();
    }, 1000);
  };

  render() {
    return (
      <div className="CenterComponentProfile">
        <div className="SpacingDiv">
          <div className="UserProfile">
            <form className="OutsideForm" onSubmit={this.handleSubmit}>
              <h1>New Meetup Form</h1>
              <label>Title</label>
              <input className="MeetupForm" 
                type="text"
                value={this.state.title}
                onChange={this.handleTitleChange}
              ></input>
              <br />
              <label>Date</label>
              <input  className="MeetupForm"
                type="text"
                value={this.state.date}
                onChange={this.handleDateChange}
              ></input>
              <br />
              <label>Time</label>
              <input  className="MeetupForm"
                ttype="text"
                value={this.state.time}
                onChange={this.handleTimeChange}
              ></input>
              <br />
              <label>Location</label>
              <input  className="MeetupForm"
                type="text"
                value={this.state.location}
                onChange={this.handleLocationChange}
              ></input>
              <br />
              <label>Image URL</label>
              <input  className="MeetupForm"
                type="text"
                value={this.state.image}
                onChange={this.handleImgURLChange}
              ></input>
              <br />
              <label>Topic</label>

              <select className="MeetupForm" id="topics" onChange={this.handleTopicChange}>
                <option value="" selected disabled hidden>
                  Choose Topic
                </option>
                <option value="1">Ruby</option>
                <option value="2">Rails</option>
                <option value="3">Sinatra</option>
                <option value="4">Vanilla JavaScript</option>
                <option value="5">React</option>
                <option value="6">Redux</option>
                <option value="7">Python</option>
                <option value="8">HTML</option>
                <option value="9">CSS</option>
                <option value="10">Algorithms</option>
                <option value="11">Bootstrap</option>
                <option value="12">SQL</option>
              </select>

              <br />
              <br />
              <br />
              <input type="submit" className="SignInBtn"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMeetupForm;
