import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import CarouselPage from "../../components/carousel/carouselPage.js";
// import { Input, TextArea, FormBtn } from "../../components/Form";

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
     
      <Wrapper>
        <Jumbotron>
      <h1>Wine'd Up! </h1>
      </Jumbotron>
              <Container fluid>

          <Row>
            <Col size="md-9">
            </Col>
            <Col size="md-6 sm-12">
                <h1>Courses</h1>
                
                <h1>Exams</h1>

            </Col>
          </Row>
          <Row>
          <CarouselPage>
                </CarouselPage>
            </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Courses;
