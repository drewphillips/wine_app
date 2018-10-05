import React, { Component } from "react";
import "./LoginJumbo.css";
import { Navbar, NavbarBrand, Container } from "mdbreact";

class LoginJumbo extends Component {
  render() {
    return (
      <Navbar dark fixed-top id="theNav">
        <Container>
          <NavbarBrand id="wined">
            <h1> Wine'd Up </h1>
          </NavbarBrand>
        </Container>
      </Navbar>
    );
  }
}

export default LoginJumbo;
