import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Chardonnay from "./pages/Chardonnay";
import Courses from "./pages/Courses";
import CourseNav from "./pages/CourseNav";
import ExamHome from "./pages/ExamHome";
import Exam from "./pages/Exam";
import Exam2 from "./pages/Exam2";
import Login from "./pages/Login";
import MainNav from "./pages/MainNav";
import Results from "./pages/Results";
import Register from "./pages/Register";
import WineTasting from "./pages/WineTasting";


const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/exam" component={Exam} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mainnav" component={MainNav} />
        <Route exact path="/coursenav" component={CourseNav} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/chardonnay" component={Chardonnay} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/examhome" component={ExamHome} />
        <Route exact path="/examtwo" component={Exam2} />
        <Route exact path="/winetasting" component={WineTasting} />


        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
