import React, { Component } from "react";
import "./Register.css";
import LoginJumbo from "../../components/LoginJumbo";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Input, Button } from "mdbreact";
import API from "../../utils/API.js";

class Register extends Component {
  state = {
    password: "",
    emailAddress: ""
  };

  createUser = e => {
    e.preventDefault();
    API.createUser(this.state.emailAddress, this.state.password);
    console.log(this.state.emailAddress);
  };

  render() {
    return (
      <div>
        <LoginJumbo />

        <Wrapper>
          <form onSubmit={this.createUser} className="LoginForm">
            <h2>Create a new account</h2>
            <div>
              <Input
                onChange={e =>
                  this.setState({
                    name: e.target.value
                  })
                }
                label="Your name"
                icon="user"
                htmlFor="name"
                validate
                error="wrong"
                success="right"
                required="required"
              />
              <Input
                onChange={e =>
                  this.setState({
                    emailAddress: e.target.value
                  })
                }
                label="Your email address"
                icon="envelope"
                group
                type="email"
                htmlFor="email"
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
                id="password"
                validate
                required="required"
              />
              <Input
                onChange={e =>
                  this.setState({
                    password: e.target.value
                  })
                }
                label="Re-type your password"
                icon="lock"
                group
                type="password"
                id="confirm_password"
                validate
                required="required"
              />
            </div>
            <div>
              <a href="/mainnav">
                <Button
                  id="register"
                  type="submit"
                  color="elegant"
                  onClick={validatePassword}
                >
                  Register
                </Button>
              </a>
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}

function validatePassword() {
  const password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

  console.log(password);
  console.log(confirm_password);

  if (password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("The passwords don't match");
  } else {
    confirm_password.setCustomValidity("");
  }
  //   password.onchange = validatePassword;
  //   confirm_password.onkeyup = validatePassword;
}

export default Register;
