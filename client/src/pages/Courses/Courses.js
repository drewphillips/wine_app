import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class Courses extends Component {
  state = {
    courses: []
  };

  // componentDidMount() {
  //   this.loadCourses();
  // }

  // loadCourses = () => {
  //   API.getCourses()
  //     .then(res => this.setState({ courses: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Jumbotron />
        <Wrapper>
          <Container fluid>
            <Row>
              <Col size="md-9" />
              <Col size="md-6 sm-12">
                <h1>Courses</h1>

                <h1>Exams</h1>
              </Col>
            </Row>
            <Row>
            </Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Courses;
