import React, { Component } from "react";
import "./login.css";

import LoginJumbo from "../../components/Jumbotron";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Input, Button } from "mdbreact";
import Logo from "../../components/logo";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginJumbo />

        <Wrapper>
          <form id="LoginForm">
            <h2>Log in</h2>
            <div className="grey-text">
              <label for="email">Email</label>
              <Input
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <label for="password">Password</label>
              <Input
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <Button id="login" type="login" color="elegant">
                Login
              </Button>
            </div>
            <div id="Logo">
              <Logo />
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default Login;
