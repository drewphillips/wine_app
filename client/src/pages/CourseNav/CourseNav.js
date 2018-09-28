import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

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
                <h1>White Grapes</h1>
                <h1>Red Grapes</h1>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default CourseNav;
