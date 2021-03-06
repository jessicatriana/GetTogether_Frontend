import React, { Component } from "react";

class CenterComponentProfile extends Component {

  render() {
    return (
      <div className="CenterComponentProfile">
        <div className="SpacingDiv">
          <div className="UserProfile">
            <h1>Welcome back {this.props.userDetails.first_name}!</h1>
            <h2>Email: {this.props.userDetails.email}</h2>

            <p>Have a meetup in mind? Create one!</p>
            <button className="SignInBtn" onClick={this.props.handleClick}>
              Create a New Meetup
            </button>
            <br/>  <br/>
            <p>Thanks for using Get Together!</p>
            <p>
              Here are the meetups you've joined and the topics you've chosen.
            </p>
            <br />
            <p style={{fontStyle:"italic"}}>Stay tuned for more app features in the near future!</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CenterComponentProfile;
