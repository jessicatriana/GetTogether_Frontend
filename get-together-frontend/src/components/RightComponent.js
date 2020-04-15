import React, { Component } from 'react';

class RightComponent extends Component {
    const 
    render() {
        return (
            <div className="RightComponent">
                <h1>{this.props.user.first_name}'s Fav Topics:</h1>
                {this.props.userTopics && this.props.userTopics.map( t => {
                  return  <p>{t.topic_name}</p>
                })}

            </div>
        );
    }
}

export default RightComponent;
