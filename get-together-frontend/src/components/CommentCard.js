import React, { Component } from 'react';

class CommentCard extends Component {
    render() {
        return (
            <div className="CommentCard">
                <p style={{textAlign: "left"}}>"{this.props.comment.content}"</p>
                <p style={{fontStyle: "italic", textAlign: "center"}}>- {this.props.comment.user.first_name} | {this.props.comment.meetup.title} <br/></p>
               
            </div>
        );
    }
}

export default CommentCard;
