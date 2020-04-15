import React, { Component } from "react";

class Checkboxes extends Component {
  constructor() {
    super();

    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/topics")
      .then((res) => res.json())
      .then((topics) => {
        this.setState({ topics });
      });
  }

  handleChange = (t) => {
    console.log(t);
    this.setState({
      topics: this.state.topics.map((topic) =>
        topic.id === t.id ? { ...topic, clicked: true } : topic
      ),
    });
    this.props.handleTopicClick(t);

    // sendToSubmit = () => {
    //   const savedTopics = this.state.topics.filter((topic) => topic.clicked);
    // };
  };

  render() {
    return (
      <div>
        <form className="CheckboxSection">
          {this.state.topics.map((topic) => {
            return (
              <div>
                <label>{topic.topic_name}</label>
                <input
                  key={topic.id}
                  type="checkbox"
                  className="Checkbox"
                  value={topic.topic_name}
                  onClick={() => this.handleChange(topic)}
                />
              </div>
            );
          })}

          <br></br>
        </form>
      </div>
    );
  }
}

export default Checkboxes;
