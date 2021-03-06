import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "../src/components/Signup";
import Signin from "../src/components/Signin";
import Profile from "../src/components/Profile";
import MainPage from "../src/components/MainPage";



ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Signin} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
