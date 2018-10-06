import React, { Component } from "react";
import "./login.css";

import LoginJumbo from "../../components/LoginJumbo";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Input, Button } from "mdbreact";

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
                required="required"
              />
              <Input
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                required="required"
              />
            </div>
            <div>
              <Button id="login" type="login" color="elegant">
                Login
              </Button>
            </div>
          </form>
          <form className="LoginForm">
            <h2>Create a new account</h2>
            <Button
              id="create-account"
              href="/register"
              type="create-account"
              color="elegant"
            >
              Create account
            </Button>
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default Login;
