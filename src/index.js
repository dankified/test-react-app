import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import './global.css';

class Main extends Component {
  render() {
    return <Header />;
  }
}

render(<Main />, document.getElementById("root"));
