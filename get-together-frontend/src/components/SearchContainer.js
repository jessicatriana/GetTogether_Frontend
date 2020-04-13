import React, { Component } from 'react';
import SearchBar from './SearchBar'

class SearchContainer extends Component {
    render() {
        return (
            <div className="SearchContainer">
       
                <SearchBar searchWord={this.props.searchWord} handleChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default SearchContainer;
