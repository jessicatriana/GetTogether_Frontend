import React, { Component } from 'react';

class RightComponent extends Component {
    render() {
        return (
            <div className="RightComponent">
                <h1>{this.props.user.first_name}'s Fav Topics:</h1>
            </div>
        );
    }
}

export default RightComponent;
