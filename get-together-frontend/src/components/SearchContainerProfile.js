import React, { Component } from "react";
class SearchContainerProfile extends Component {
  render() {
    return (
      <div
        className="SearchContainer"
        style={{ fontStyle: "italic", textAlign: "center" }}
      >
        <marquee behavior="scroll" direction="left">
          "The best app for meeting like-minded programmers..." - NY Times
        </marquee>
      </div>
    );
  }
}
export default SearchContainerProfile;
