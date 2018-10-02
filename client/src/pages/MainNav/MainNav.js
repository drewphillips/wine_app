import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from "mdbreact";

class MainNav extends Component {
  state = {
    links: []
  };

  render() {
    return (
      <div>
        <Jumbotron />

        <Wrapper>
          <main className="main">
            <Button color="mdb-color">Courses</Button>
            <Button color="mdb-color">Exams</Button>
          </main>
        </Wrapper>
      </div>
    );
  }
}

const OsLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? " " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

export default MainNav;
