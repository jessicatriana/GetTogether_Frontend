import React, { Component } from 'react';
import CommentCard from './CommentCard'

class LeftComponent extends Component {
    render() {
        return (
            <div className="LeftComponent">
                
                <div className="ScrollingList">
                <marquee direction="up" behavior="scroll">
                {this.props.comments.map(comment => {
                    return <CommentCard key={comment.id} comment={comment} />
                })}
                </marquee>
                </div>
            </div>
        );
    }
}

export default LeftComponent;
