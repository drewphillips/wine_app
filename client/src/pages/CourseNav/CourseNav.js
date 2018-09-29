import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CourseNav extends Component {
    state = {
      links: []
    };


render() {
    return (
     
      <Wrapper>
        <Jumbotron>
      <h1>Wine'd Up! </h1>
      </Jumbotron>
              <Container fluid>

          <Row>
            <Col size="md-9">
            </Col>
            <Col size="md-6 sm-12">
                <h1><OsLink to="/" label="White Grapes">White Grapes</OsLink></h1>
                
                <h1><OsLink to="/" label="Red Grapes">Red Grapes</OsLink></h1>

            </Col>
          </Row>
        </Container>
      </Wrapper>
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

export default CourseNav;
