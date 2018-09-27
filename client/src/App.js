import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseNav from "./pages/CourseNav";
import MainNav from "./pages/MainNav";
import Links from "./components/Links";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/mainnav" component={MainNav} />
        <Route exact path="/coursenav" component={CourseNav} />
        <Route exact path="/courses" component={Courses} />

        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
