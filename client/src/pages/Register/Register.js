import React, { Component } from "react";
import "./Register.css";
import LoginJumbo from "../../components/LoginJumbo";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Input, Button } from "mdbreact";

class Register extends Component {
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
                htmlFor="name"
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
              <Button
                id="register"
                type="register"
                color="elegant"
                onClick={validatePassword}
              >
                Register
              </Button>
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
