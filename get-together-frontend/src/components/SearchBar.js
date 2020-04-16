import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
          <span className="iconify" data-icon="et-magnifying-glass" data-inline="false"></span>
          Search for a Meetup:
            <input  className="Search"
              type="text"
              name="name"
              onChange={(event) => this.props.handleChange(event)}
            />
          </label>
          <input type="submit" value="Submit" className="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
