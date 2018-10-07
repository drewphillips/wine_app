import React, { Component } from "react";
import Questions from "../../components/QuestionBlock/Questions";
import Wrapper from "../../components/Wrapper";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col, Input, Button } from "mdbreact";
import { RadioGroup, ReversedRadioButton, RadioButton } from "react-radio-buttons";
import "./Exam.css";

class Exam extends React.Component {

  handleChange = event => { };

  render() {
    return (
      <div>
        <Wrapper>
          <Container>
            <Jumbotron />
            <RadioGroup onChange={this.onChange} vertical>
              <RadioButton value="apple" iconSize={20}>
                <p class="buttonText">Apple</p>
              </RadioButton>
              <RadioButton value="orange" iconSize={20}>
              <p class="buttonText">Orange</p>
              </RadioButton>
              <RadioButton value="melon" iconSize={20}>
              <p class="buttonText">Mango</p>
              </RadioButton>
              <RadioButton value="peach" iconSize={20}>
              <p class="buttonText">Peach</p>
              </RadioButton>
            </RadioGroup>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Exam;
