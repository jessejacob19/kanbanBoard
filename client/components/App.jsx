import React, { Component, Fragment as F } from "react";
import { connect } from "react-redux";
import { Route, Link, HashRouter as Router } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Register from './auth/Register'
import Login from './auth/Login'

//IMPORT THE ACTIONS LIKE THIS
// import { fetchEmojiAction } from "../actions/emoji";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <F>
        <Router>
          <Route path="/" component={Navbar} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path='/boards' component={BoardList} /> */}
        </Router>
      </F>
    );
  }
}

export default connect()(App);
