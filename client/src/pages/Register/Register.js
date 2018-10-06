import React, { Component } from "react";
import "./Register.css";
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
            <h2>Create a new account</h2>
            <div>
              <Input
                label="Your name"
                icon="user"
                for="name"
                validate
                error="wrong"
                success="right"
                required="required"
              />
              <Input
                label="Your email address"
                icon="envelope"
                group
                type="email"
                for="email"
                validate
                error="wrong"
                success="right"
                required="required"
              />
              <Input
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
                required="required"
              />
              <Input
                label="Re-type your password"
                icon="lock"
                group
                type="password"
                validate
                required="required"
              />
            </div>
            <div>
              <Button id="register" type="register" color="elegant">
                Register
              </Button>
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default Login;
