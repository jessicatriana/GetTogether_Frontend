import React, { Component } from 'react';
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import CenterComponent from './CenterComponent'

class AllThree extends Component {
    render() {
        return (
            <div className="AllThree">
        <LeftComponent meetups={this.props.meetups}/>
        <CenterComponent meetups={this.props.meetups} filteredMeetups={this.props.filteredMeetups}/>
        <RightComponent user={[]} />
            </div>
        );
    }
}

export default AllThree;
