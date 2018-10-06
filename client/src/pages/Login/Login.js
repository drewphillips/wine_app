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
  }

  createUser = (e) => {
    e.preventDefault();
    API.createUser(this.state.emailAddress, this.state.password)
  }

  loginUser = (e) => {
    e.preventDefault();
   API.getUser(this.state.emailAddress, this.state.password)
}

  render() {
    return (
      <div>
        <LoginJumbo />

        <Wrapper>
          <form className="LoginForm" onSubmit={this.loginUser}>
            <h2>Sign in to get started</h2>
            <div className="grey-text">
              <Input onChange={e => this.setState({ emailAddress: e.target.value })}
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                required="required"
              />
              <Input onChange={e => this.setState({ password: e.target.value })}
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                required="required"
              />
            </div>
            <div>
              <Button id="login" type="submit" color="elegant">
                Login
              </Button>
            </div>
          </form>
          <form onSubmit={this.createUser} className="LoginForm">
            <h2>Or create a new account</h2>
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
