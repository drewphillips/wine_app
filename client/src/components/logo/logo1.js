import React, { Component } from "react";
import { Animation } from "mdbreact";
import wineLogo1 from "./wine-7.jpg";

class Logo1 extends Component {
  render() {
    return (
      <Animation type="zoomInDown" count={1} duration="4s">
        <img height="100" src={wineLogo1} alt="Transparent MDB Logo" />
      </Animation>
    );
  }
}

export default Logo1;
