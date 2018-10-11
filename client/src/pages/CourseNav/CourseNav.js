import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import "./CourseNav.css";
import { Collapse } from "mdbreact";
import Logo from "../../components/logo";

class CourseNav extends Component {
  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);





    this.state = {
      collapse1: false,
      collapse2: false,
      collapse3: false


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

  toggle3() {
    this.setState({ collapse3: !this.state.collapse3 });
  }

  render() {
    return (
      <div>
        <Jumbotron />

        <Wrapper>
          <div>
            <div id="coursesNav">
              <h2>Courses</h2>
              <button onClick={this.toggle1} style={{ marginBottom: "1rem" }}>
                Red Grapes
              </button>
              <Collapse isOpen={this.state.collapse1}>
              <p className="wines">Barbera</p>
                <p className="wines">Cabernet Sauvignon</p>
                <p className="wines">Grenache</p>
                <p className="wines">Malbec</p>
                <p className="wines">Mouvedre/Monastrell/Mataro</p>
                <p className="wines">Merlot</p>
                <p className="wines">Nebbiolo</p>
                <p className="wines">Pinot Noir</p>
                <p className="wines">Sangiovese</p>
                <p className="wines">Syrah/Shiraz</p>
                <p className="wines">Tempranillo</p>
              </Collapse>
              <br />
              <button onClick={this.toggle2} style={{ marginBottom: "1rem" }}>
                White Grapes{" "}
              </button>
              <Collapse isOpen={this.state.collapse2}>
                <a href="/chardonnay">
                <p className="wines">Albariño</p>  
                <p className="wines">Cava Grapes</p>             
                  <p className="wines">Chardonnay</p>
                </a>
                <p className="wines">Gewürztraminer</p>
                <p className="wines">Grüner Veltliner</p>
                <p className="wines">Moscato</p>
                <p className="wines">Pinot Grigio</p>
                <p className="wines">Sauvignon Blanc</p>
                <p className="wines">Sémillon</p>
                <p className="wines">Riesling</p>
                <p className="wines">Viognier</p>

              </Collapse>

                <button onClick={this.toggle3} style={{ marginBottom: "1rem" }}>
                Regions
              </button>
              <Collapse isOpen={this.state.collapse3}>
                <p className="wines">France</p>
                <p className="wines">Germany</p>
                <p className="wines">Italy</p>
                <p className="wines">California</p>
                <p className="wines">Australia</p>
                <p className="wines">South Africa</p>



                </Collapse>
                
        
              <div id="Logo">
                <Logo />
              </div>
            </div>
          </div>
          ); }
        </Wrapper>
      </div>
    );
  }
}

export default CourseNav;
