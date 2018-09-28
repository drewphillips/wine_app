import React, { Component } from "react";
import "./jumbotron.css";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container,
  HamburgerToggler
} from "mdbreact";

class Jumbotron extends Component {
  state = {
    collapse1: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    return (
      <Container className="col">
        <Navbar dark fixed-top navbar-expand-md>
          <Container>
            <NavbarBrand>
              <h1> Wine'd Up </h1>{" "}
            </NavbarBrand>
            <HamburgerToggler
              color="white"
              id="hamburger1"
              className="theBurger"
              onClick={() => this.toggleSingleCollapse("collapse1")}
            />
            <Collapse isOpen={this.state.collapse1} navbar>
              <NavbarNav left>
                <NavItem active className="theLink">
                  <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem className="theLink">
                  <NavLink to="/courses">Courses</NavLink>
                </NavItem>
                <NavItem className="theLink">
                  <NavLink to="#!">Exams</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default Jumbotron;
