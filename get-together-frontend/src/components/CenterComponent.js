import React, { Component } from 'react';
import MeetupList from './MeetupList';

class CenterComponent extends Component {
    render() {
        return (
            <div className="CenterComponent">
                <div className="SpacingDiv">
                <MeetupList meetups={this.props.filteredMeetups}/>
                </div>
            </div>
        );
    }
}

export default CenterComponent;
