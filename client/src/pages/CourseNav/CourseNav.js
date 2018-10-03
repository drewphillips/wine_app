import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import "./CourseNav.css";
import { Collapse } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import {
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

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
    );
  }
}

export default CourseNav;
