import React, { Component } from 'react';
import LeftComponentProfile from './LeftComponentProfile'
import RightComponent from './RightComponent'
import CenterComponentProfile from './CenterComponentProfile'
class AllThreeProfile extends Component {
    render() {
        const user = {
            id: this.props.userInfo.id,
            first_name: this.props.userInfo.first_name,
            email: this.props.userInfo.email,
            password: this.props.userInfo.password,
            meetups: this.props.userInfo.meetups
        }
        return (
            <div className="AllThree">
                <LeftComponentProfile userMeetups={user.meetups}/>
                <CenterComponentProfile userDetails={user}/>
                <RightComponent userTopics={this.props.userInfo.topics} user={user}/>
            </div>
        );
    }
}
export default AllThreeProfile;