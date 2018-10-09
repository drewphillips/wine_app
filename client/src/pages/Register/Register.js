import React, { Component } from "react";
import "./Register.css";
import LoginJumbo from "../../components/LoginJumbo";
// import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import { Input, Button } from "mdbreact";
import API from "../../utils/API.js";

class Register extends Component {

 state = {
   name:"",
   password: "",
   emailAddress:""
 }

 createUser = (e) => {
   e.preventDefault();
   API.createUser(this.state.emailAddress, this.state.password)
 }


 render() {
   return (
     <div>
       <LoginJumbo />

       <Wrapper>
         <form onSubmit={this.createUser} className="LoginForm">
           <h2>Create a new account</h2>
           <div>
             <Input onChange = {e => this.setState({name: e.target.value})}
               label="Your name"
               icon="user"
               for="name"
               validate
               error="wrong"
               success="right"
               required="required"
             />
             <Input onChange = {e => this.setState({emailAddress:e.target.value})}
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
             <Input onChange = {e => this.setState({password: e.target.value})}
               label="Re-type your password"
               icon="lock"
               group
               type="password"
               validate
               required="required"
             />
           </div>
           <div>
             <Button id="register" type="submit" color="elegant" href="/MainNav">
               Register
             </Button>
           </div>
         </form>
       </Wrapper>
     </div>
   );
 }
}

export default Register;
