import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
<<<<<<< HEAD
import "./CourseNav.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
=======
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
>>>>>>> master

class CourseNav extends Component {
  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.state = {
      collapse1: false,
      collapse2: false
    };
  }

  toggleController() {
    console.log("toggle Controller!");
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  toggle1() {
    this.setState({ collapse1: !this.state.collapse1 });
  }

  toggle2() {
    this.setState({ collapse2: !this.state.collapse2 });
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <Jumbotron />

        <Wrapper>
          <div>
            <div>
              <button
                onClick={this.toggle1}
                style={{ marginBottom: "1rem" }}
                className="grapeType"
              >
                Red Grapes
              </button>
              <Collapse isOpen={this.state.collapse1}>
                <p className="wines">Merlot</p>
                <p className="wines">Pinot Noir</p>
                <p className="wines">Syrah</p>
              </Collapse>
              <br />
              <button
                onClick={this.toggle2}
                style={{ marginBottom: "1rem" }}
                className="grapeType"
              >
                White grapes{" "}
              </button>
              <Collapse isOpen={this.state.collapse2}>
                <a href="/chardonnay">
                  <p className="wines">Chardonnay</p>
                </a>
                <p className="wines">Riesling</p>
                <p className="wines">Sauvignon Blanc</p>
              </Collapse>
            </div>
          </div>
          ); }
        </Wrapper>
      </div>
=======
     
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
>>>>>>> master
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
