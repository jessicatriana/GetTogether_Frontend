import React, { Component } from 'react';

class RightComponent extends Component {
    const 
    render() {
        return (
            <div className="RightComponent">
                <h1>Your Interests</h1>
                {this.props.userTopics && this.props.userTopics.map( t => {
                  return  <p>{t.topic_name}</p>
                })}

            </div>
        );
    }
}

export default RightComponent;
