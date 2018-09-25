import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
// import Nav from "./pages/Nav";





const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/courses" component={Courses} />

        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;

