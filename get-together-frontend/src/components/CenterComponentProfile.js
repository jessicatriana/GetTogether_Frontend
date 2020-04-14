import React, { Component } from 'react';
class CenterComponentProfile extends Component {
    render() {
        return (
            <div className="CenterComponent">
                <div className="SpacingDiv">
                    <h1>User: {this.props.userDetails.first_name}</h1>
                    <h2>{this.props.userDetails.email}</h2>
                </div>
            </div>
        );
    }
}
export default CenterComponentProfile;