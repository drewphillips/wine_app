import React, { Component } from "react";
import "./login.css";

import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
<<<<<<< HEAD
import Logo from '../../components/logo';
import Logo1 from "../../components/logo"


class Login extends Component {

    render() {
        return (

      <Wrapper>
      <Jumbotron>
        <h1>Wine'd Up! </h1>
      </Jumbotron>
            
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <h1>Wine'd Up! </h1>

                        <form>
                            <Input name="username" placeholder="Username (required)" />
                            <Input name="Password" placeholder="Password (required)" />
                            <FormBtn>Log In</FormBtn>
                        </form>


                    </Col>
                </Row>
                <Row>
<Logo></Logo>

<Logo1></Logo1> 
                 </Row>
            </Container>
            </Wrapper>

        );
    }
=======
import { Container, Row, Col, Input, Button } from "mdbreact";

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
                </form>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
>>>>>>> master
}

export default Login;
