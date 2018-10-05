import React, { Component } from "react";
import { Animation } from "mdbreact";
import wineLogo from "./wine_7.jpg";

class Logo extends Component {
  render() {
    return (
      <Animation type="zoomInDown" count={1} duration="4s">
        <img height="100" src={wineLogo} alt="Transparent MDB Logo" />
      </Animation>
    );
  }
}

export default Logo;
