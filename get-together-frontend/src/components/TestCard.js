import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class TestCard extends Component {
  render() {
    return (
      <div onClick={() => this.props.joinMeetup(this.props.meetup)}
      >
      <Flippy
        className="Flippy"
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "200px", height: "200px", padding: "20px"}} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "transparent",
            borderRadius: "15px",
          }}
        >
          <img
            src={this.props.meetup.image}
            alt="More Info"
            width="180"
            height="180"
          />
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#264C99",
            // backgroundColor: "#000000",
            color: "#FFFFFF",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <h1>{this.props.meetup.title}</h1>
          <p>Location: {this.props.meetup.location}</p>
          <p>Date: {this.props.meetup.date}</p>
          <h5>Topic: {this.props.meetup.topic.topic_name}</h5>
        </BackSide>
      </Flippy>
      </div>
    );
  }
}

export default TestCard;
