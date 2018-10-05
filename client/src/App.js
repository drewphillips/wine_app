import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseNav from "./pages/CourseNav";
import MainNav from "./pages/MainNav";
import Chardonnay from "./pages/Chardonnay";
import Exam from "./pages/Exam";
var auth = require('./routes/auth');

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/exam" component={Exam} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mainnav" component={MainNav} />
        <Route exact path="/coursenav" component={CourseNav} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/chardonnay" component={Chardonnay} />

        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

app.use('/api/auth', auth);

export default App;
