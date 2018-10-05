import React, { Component } from "react";
import { Animation } from "mdbreact";
import wineLogo from "../../assets/images/Logo.png";

class Logo extends Component {
  render() {
    return (
      <Animation type="zoomInDown" count={1} duration="3s">
        <img height="260" src={wineLogo} alt="Wine'd Up Logo" />
      </Animation>
    );
  }
}

export default Logo;
