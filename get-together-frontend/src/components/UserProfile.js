import React, { Component } from 'react';

class UserProfile extends Component {
    render() {
        return (
            <div>
                 <div className="UserProfile">
                    <h1>Welcome back, {this.props.userDetails.first_name}!</h1>
                    <h2>Email: {this.props.userDetails.email}</h2>
                    </div>
            </div>
        );
    }
}

export default UserProfile;
