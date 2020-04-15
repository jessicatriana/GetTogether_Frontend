import React, { Component } from 'react';
import CommentCard from './CommentCard'

class LeftComponent extends Component {
    render() {
        return (
            <div className="LeftComponent">
                <h1>Newsfeed</h1>
                {this.props.comments.map(comment => {
                    return <CommentCard key={comment.id} comment={comment} />
                })}
            </div>
        );
    }
}

export default LeftComponent;
