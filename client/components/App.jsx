import React, { Component, Fragment as F } from "react";
import { connect } from "react-redux";

import Navbar from "./navbar/Navbar";
import { Route, Link, HashRouter as Router } from "react-router-dom";

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
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
        </Router>
        <Navbar />
      </F>
    );
  }
}
// function mapStateToProps(state) {
//   return state;
// }

// function mapDispatchToProps(dispatch) {
//   //HOW TO PROPERLY DISPATCH
//   return {
//     fetchEmoji: () => {
//       dispatch(fetchEmojiAction());
//     }
//   };
// }

export default connect()(App);
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
