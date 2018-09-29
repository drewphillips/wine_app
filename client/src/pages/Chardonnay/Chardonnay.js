import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import { Col, Row, Container } from "../../components/Grid";
// import CourseCard from "../../components/CourseCard";
import CarouselPage from "../../components/CarouselPage";
import { Card, CardBody, CardImage, CardTitle, CardText, Fa } from "mdbreact";

class Chardonnay extends React.Component {
  render() {
    return (
      <div>
        <CarouselPage />
      </div>
    );
  }
}

export default Chardonnay;
