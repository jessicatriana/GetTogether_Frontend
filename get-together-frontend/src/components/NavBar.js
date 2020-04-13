import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import SearchContainer from "./SearchContainer";
import SearchBar from './SearchBar'

class NavBar extends Component {
  render() {
    return (
        <div className="NavBar">
            <div className="Logo">
                "LOGO"
            </div>
            <div className="SearchBar">
                <SearchBar searchWord={this.props.searchWord} handleChange={this.props.handleChange}/>
            </div>
        <div className ="NavLinks">
            "Logo"
      <NavLink to="/Profile" exact activeStyle={{ color: "blue" }}>Profile</NavLink>


 
    </div>
    </div>
    )
  }
}
        export default NavBar;



// <nav class="navbar" role="navigation" aria-label="main navigation">
//   <div class="navbar-brand">
//     {/* <a class="navbar-item" href="https://bulma.io">
//       <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
//     </a> */}

//     <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//     </a>
//   </div>

//   <div id="navbarBasicExample" class="navbar-menu">
//     <div class="navbar-start">
//       <a class="navbar-item">
//          <NavLink to="/Profile" exact activeStyle={{ color: "blue" }}></NavLink>

//       </a>

//       <a class="navbar-item">
//     <NavLink to="/Login" exact activeStyle={{ color: "blue" }}></NavLink>

//       </a>

//       <div class="navbar-item has-dropdown is-hoverable">
//         {/* <a class="navbar-link">
          
//         </a> */}<span>
//     <SearchBar/></span>
//         <div class="navbar-dropdown">
//           <a class="navbar-item">
//             About
//           </a>
//           <a class="navbar-item">
//             Jobs
//           </a>
//           <a class="navbar-item">
//             Contact
//           </a>
//           {/* <hr class="navbar-divider">
//           </hr> */}
//           <a class="navbar-item">
//             Report an issue
//           </a>
         
//         </div>
//       </div>
//     </div>

//     <div class="navbar-end">
//       <div class="navbar-item">
//         <div class="buttons">
//           <a class="button is-primary">
//             <strong>Sign up</strong>
//           </a>
//           <a class="button is-light">
//             Log in
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>




//         // <div
//         //   className="NavBar"
//         // >






            
//     //   {/* <div classname=
//     //   "RightLinks">
//     //     <span>
//     //       <NavLink to="/Signup" exact activeStyle={{ color: "blue" }}>
//     //         Signup
//     //       </NavLink></span>
//     //       <span>
//     //       <NavLink to="/Profile" exact activeStyle={{ color: "blue" }}>
//     //         Profile
//     //       </NavLink>
//     //       </span>
//     //     </div> */}

//     // //   </div>
//     );
//   }
// }

