import React, { Component } from 'react';
import ProfileNavBar from "./ProfileNavBar";
import Footer from "./Footer";
import AllThreeProfile from "./AllThreeProfile";
import SearchContainerProfile from './SearchContainerProfile';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
        };
    }
    componentDidMount() {
        const API = `http://localhost:3000/users/${window.userId}`;
        fetch(API)
          .then((response) => response.json())
          .then((user) => {
            this.setState({ user });
          });
    }
    render() {
        return (
            <div>
                <ProfileNavBar />
                <SearchContainerProfile />
                <AllThreeProfile userInfo={this.state.user} />
                <Footer />
            </div>
        );
    }
}
export default Profile;