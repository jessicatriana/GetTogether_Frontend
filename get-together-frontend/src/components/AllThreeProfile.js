import React, { Component } from "react";
import LeftComponentProfile from "./LeftComponentProfile";
import RightComponent from "./RightComponent";
import CenterComponentProfile from "./CenterComponentProfile";

class AllThreeProfile extends Component {
  render() {
    const user = {
      id: this.props.userInfo.id,
      first_name: this.props.userInfo.first_name,
      email: this.props.userInfo.email,
      password: this.props.userInfo.password,
      meetups: this.props.userInfo.meetups,
      topics: this.props.userInfo.topics,
    };
    return (
      <div className="AllThree">
        <LeftComponentProfile userMeetups={user.meetups} rerender={this.props.rerender}/>
        <CenterComponentProfile userDetails={user} />
        <RightComponent userTopics={this.props.userInfo.topics} user={this.props.userInfo} />
      </div>
    );
  }
}
export default AllThreeProfile;
