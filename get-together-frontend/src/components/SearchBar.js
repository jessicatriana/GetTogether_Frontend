import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Enter a Topic or Meetup:
            <input
              type="text"
              name="name"
              onChange={(event) => this.props.handleChange(event)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
