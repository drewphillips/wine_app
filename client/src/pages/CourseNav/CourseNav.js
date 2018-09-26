import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";

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
                <h1>White Grapes</h1>
                
                <h1>Red Grapes</h1>

            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default CourseNav;
