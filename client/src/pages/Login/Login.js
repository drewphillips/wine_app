import React, { Component } from "react";
import "./login.css";
import LoginJumbo from "../../components/LoginJumbo";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Input, Button } from "mdbreact";
import API from "../../utils/API.js";

class Login extends Component {
  state = {
    // name: "",
    password: "",
    emailAddress: ""
  };

  loginUser = e => {
    e.preventDefault();
    API.getUser(this.state.emailAddress, this.state.password);
  };

  render() {
    return (
      <div>
        <LoginJumbo />
        {/* // {console.log(this.state)} */}
        <Wrapper>
          <form className="LoginForm" onSubmit={this.loginUser}>
            <h2>Sign in to get started</h2>
            <div className="grey-text">
              <Input
                onChange={e => this.setState({ emailAddress: e.target.value })}
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
                onChange={e => this.setState({ password: e.target.value })}
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                required="required"
              />
            </div>
            <div>
              <Button id="login" type="submit" color="elegant" onClick={login}>
                Login
              </Button>
            </div>

            <a id="create-account" href="/register">
              &nbsp;Not a user? Click here to create an account
            </a>
          </form>
        </Wrapper>
      </div>
    );
  }
}

function login() {
  const url = "/mainnav";

  window.open(url, "_top");
}

export default Login;
