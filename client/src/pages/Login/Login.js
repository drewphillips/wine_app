import React, { Component } from "react";
import "./login.css";

import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Container, Row, Col, Input, Button } from "mdbreact";

class Login extends Component {
  render() {
    return (
      <div>
        <Jumbotron />

        <Wrapper>
          <Container>
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
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
                <Button color="elegant">Login</Button>
              </div>
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Login;
