import React, { Component } from "react";
import "./login.css";


import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Container, Row, Col, Input, Button } from "mdbreact";
import Logo from "../../components/logo"

class Login extends Component {
  render() {
    return (
      <div>
        <Jumbotron />

        <Wrapper>
          <Container>
            <Row>
              <Col md="6">
                <form>
                  <p className="h5 text-center mb-4">Sign in</p>
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
                  <div className="text-center">
                    <Button>Login</Button>
                  </div>
                  <div id = "Logo">
                  <Logo />
                  </div>
                </form>
              </Col>
            </Row>
           
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Login;
