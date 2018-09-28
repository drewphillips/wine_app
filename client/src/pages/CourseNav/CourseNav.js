import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import "./CourseNav.css";

import { Input, TextArea, FormBtn } from "../../components/Form";

class CourseNav extends Component {
  // state = {
  //   // links: []
  // };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleController = this.toggleController.bind(this);
  }

  toggleController() {
    console.log("toggle Controller!");
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div>
        <Jumbotron />

        <Wrapper>
          <Container fluid>
            <Row>
              <Col size="md-6 sm-12">
                <h2>White Grapes</h2>
                <h2>Red Grapes</h2>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default CourseNav;
