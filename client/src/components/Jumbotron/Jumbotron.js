import React, { Component } from "react";
import "./jumbotron.css";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  Collapse,
  Container,
  HamburgerToggler,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
      <Navbar dark fixed-top navbar-expand-md id="theNav">
        <Container>
          <NavbarBrand id="wined">
            <a href="/mainnav">
              <h1> Wine'd Up </h1>
            </a>
          </NavbarBrand>
          <HamburgerToggler
            color="elegant"
            id="hamburger1"
            className="theBurger"
            tabIndex="0"
            onClick={() => this.toggleSingleCollapse("collapse1")}
          />
          <Collapse isOpen={this.state.collapse1} navbar>
            <NavbarNav left>
              <NavItem id="theLink">
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown id="theLink">
                  <NavLink to="/coursenav">
                    <DropdownToggle nav caret>
                      Courses
                    </DropdownToggle>
                  </NavLink>
                  <DropdownMenu>
                    <DropdownItem id="droppy" href="#">
                      Red grapes
                      <DropdownItem id="droppy" href="#">
                        Merlot
                      </DropdownItem>
                      <DropdownItem id="droppy" href="#">
                        Pinot Noir
                      </DropdownItem>
                    </DropdownItem>
                    <DropdownItem id="droppy" href="#">
                      White grapes
                      <DropdownItem id="droppy" href="/chardonnay">
                        Chardonnay
                      </DropdownItem>
                      <DropdownItem id="droppy" href="#">
                        Sauvignon Blanc
                      </DropdownItem>
                      <DropdownItem id="droppy" href="#">
                        Riesling
                      </DropdownItem>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem id="theLink">
                <NavLink to="/exam">Exams</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Jumbotron;
