import React, { Component } from "react";
import "./login.css";

import LoginJumbo from "../../components/LoginJumbo";
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
          <form className="LoginForm">
            <h2>Sign in to get started</h2>
            <div className="grey-text">
              <Input
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <Input
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div>
              <Button id="login" type="login" color="elegant">
                Login
              </Button>
            </div>
          </form>
          <form className="LoginForm">
            <h2>Or create a new account</h2>
            <Button id="register" type="register" color="elegant">
              Register
            </Button>

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
