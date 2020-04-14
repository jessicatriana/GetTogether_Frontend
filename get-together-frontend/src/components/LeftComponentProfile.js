import React, { Component } from 'react';
import MeetupCard from './MeetupCard'
class LeftComponentProfile extends Component {
    render() {
        console.log(this.props.userMeetups)
        return (
            <div className="LeftComponent">
                <h1>New Meetups!</h1>
                {this.props.userMeetups && this.props.userMeetups.map(m => {
                    return <MeetupCard key={m.id} meetup={m} />
                })}
            </div>
        );
    }
}
export default LeftComponentProfile;