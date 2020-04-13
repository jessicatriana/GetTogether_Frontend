import React, { Component } from 'react';
import MeetupList from './MeetupList';

class CenterComponent extends Component {
    render() {
        return (
            <div className="CenterComponent">

                <MeetupList meetups={this.props.filteredMeetups}/>
            </div>
        );
    }
}

export default CenterComponent;
