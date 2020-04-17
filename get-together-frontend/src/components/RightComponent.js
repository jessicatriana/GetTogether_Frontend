import React, { Component } from "react";

class RightComponent extends Component {

    constructor() {
        super();
    
        this.state = {
          topic: "",
        };
      }
  deleteTopic = (t) => {
    alert("Topic Deleted!");

    const body = { topic_id: t.id, user_id: window.userId };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:3000/usertopic/delete", configObj);
    this.setState({
        state: this.state,
      });
      setTimeout(() => {
        this.props.rerender();
      }, 1000);
  };

  render() {
    return (
      <div className="RightComponent">
        <h1>Your Interests</h1>
        {this.props.userTopics &&
          this.props.userTopics.map((t) => {
            return (
               
              <p style={{backgroundColor:"WhiteSmoke", borderRadius:"15px"}} >
                {t.topic_name}{" "}
                <button style={{backgroundColor: "#991C11", textAlign: "center", 
                borderRadius: "20px", width: "2px", color: "white"}}
                  onClick={() => this.deleteTopic(t)}
                  className="DeleteBtn"
                >
                  x
                </button>
              </p>
            );
          })}
      </div>
    );
  }
}

export default RightComponent;
