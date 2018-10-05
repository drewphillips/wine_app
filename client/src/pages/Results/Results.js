import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from "mdbreact";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div>
        <Jumbotron />

        <Wrapper>
          <main id="whitebg">
            <h2>Results</h2>
            <p>You got X right.</p>
          </main>
        </Wrapper>
      </div>
    );
  }
}

export default Results;
