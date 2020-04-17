import React, { Component } from "react";
import LeftComponentProfile from "./LeftComponentProfile";
import RightComponent from "./RightComponent";
import CenterComponentProfile from "./CenterComponentProfile";
import NewMeetupForm from "./NewMeetupForm";

class AllThreeProfile extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

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
        <LeftComponentProfile
          userMeetups={user.meetups}
          rerender={this.props.rerender}
        />
        {this.state.clicked ? (
          <NewMeetupForm rerender={this.props.rerender}/>
        ) : (
          <CenterComponentProfile
            userDetails={user}
            handleClick={this.handleClick}
            rerender={this.props.rerender}
          />
        )}

        <RightComponent
          userTopics={this.props.userInfo.topics}
          user={this.props.userInfo}
          rerender={this.props.rerender}
        />
      </div>
    );
  }
}
export default AllThreeProfile;
