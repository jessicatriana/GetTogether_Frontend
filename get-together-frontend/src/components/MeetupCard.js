import React, { Component } from "react";
import MeetupDetails from "./MeetupDetails";
import ReactCardFlip from 'react-card-flip';

class MeetupCard extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
             <div
              className="MeetupCard"
              onClick={this.handleClick}
            >
                 <h1>{this.props.meetup.title}</h1>
             <h3>Location: {this.props.meetup.location}</h3>
              <h5>Topic: {this.props.meetup.topic.topic_name}</h5>
                </div>
                <div className="MeetupCard"
                onClick={this.handleClick}><h1>Attendees: {this.props.meetup.users.length}</h1>
                <h3>Date: {this.props.meetup.date}</h3>
                 <h5>Comments: {this.props.meetup.comments.length}</h5>
                <button className="Button">Join Meetup</button>
                 </div>

              {/* This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </YOUR_FRONT_CCOMPONENT> */}
{/*      
            <YOUR_BACK_COMPONENT>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </YOUR_BACK_COMPONENT> */}
          </ReactCardFlip>
        )
      }

//   render() {
//     return (
//             <div className="flip-card-front">
//             <div
//               className="MeetupCard"
//               onClick={() => console.log("Show MeetupDetails on click")}
//             >
//               <h1>{this.props.meetup.title}</h1>
//               <h3>Location: {this.props.meetup.location}</h3>
//               <h5>Topic: {this.props.meetup.topic.topic_name}</h5>
//             </div>
//             <div className="CardBack">BACK</div>
//             </div>
//     );
//   }
}

export default MeetupCard;
