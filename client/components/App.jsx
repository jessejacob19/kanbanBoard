import React, { Component, Fragment as F } from "react";
import { connect } from "react-redux";

import Navbar from "./navbar/Navbar";

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
        <Navbar/>
        <p>react is running</p>
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
