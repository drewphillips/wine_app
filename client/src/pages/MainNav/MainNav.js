import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from "mdbreact";
import "./MainNav.css";
import Logo from "../../components/logo";

class MainNav extends Component {
  state = {
    links: []
  };

  render() {
    return (
      <div>
        <Jumbotron />

        <Wrapper>
          <main id="whitebg">
            <p>
              Welcome to Wine'd Up, the easiest way to level up your wine
              knowledge. Start learning or test your wine intelligence!
            </p>
            <a href="/coursenav">
              <Button color="elegant">Courses</Button>
            </a>
            <a href="/exam">
              <Button color="elegant">Exams</Button>
            </a>
            <div id="Logo">
              <Logo />
            </div>
          </main>
        </Wrapper>
      </div>
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

export default MainNav;
