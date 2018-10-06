import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import "./examhome.css";
import { Collapse } from "mdbreact";

class ExamHome extends Component {
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
            <div id="coursesNav">
              <h2>Exams</h2>
              <button onClick={this.toggle1} style={{ marginBottom: "1rem" }}>
                Red Grapes
              </button>
              <Collapse isOpen={this.state.collapse1}>
                <p className="wines"><a href="/exam">Take The Exam</a></p>
                <p className="wines">Score:</p>
              </Collapse>
              <br />
              <button onClick={this.toggle2} style={{ marginBottom: "1rem" }}>
                White grapes{" "}
              </button>
              <Collapse isOpen={this.state.collapse2}>
              <p className="wines"><a href="/exam">Take The Exam</a></p>
              <p className="wines">Score:</p>
              </Collapse>
            </div>
          </div>
          ); }
        </Wrapper>
      </div>
    );
  }
}

export default ExamHome;
