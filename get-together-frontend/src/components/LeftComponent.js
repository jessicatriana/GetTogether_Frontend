import React, { Component } from 'react';
import MeetupCard from './MeetupCard'

class LeftComponent extends Component {
    render() {
        return (
            <div className="LeftComponent">
                <h1>New Meetups!</h1>
                {this.props.meetups.map(meetup => {
                    return <MeetupCard key={meetup.id} meetup={meetup} />
                })}
            </div>
        );
    }
}

export default LeftComponent;
