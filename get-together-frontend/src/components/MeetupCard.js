import React, { Component } from 'react';
import MeetupDetails from './MeetupDetails'

class MeetupCard extends Component {
    render() {
        return (
            <div className="MeetupCard" onClick={() => console.log("Show MeetupDetails on click")}>
                <h1>{this.props.meetup.title}</h1>
                <h3>Location: {this.props.meetup.location}</h3>
                <h5>Topic: {this.props.meetup.topic_id}</h5>

   
            </div>
        );
    }
}

export default MeetupCard;
