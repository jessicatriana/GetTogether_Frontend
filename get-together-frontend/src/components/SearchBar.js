import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
          <span class="iconify" data-icon="et-magnifying-glass" data-inline="false"></span>
          Search by Topic or Meetup:
            <input
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
