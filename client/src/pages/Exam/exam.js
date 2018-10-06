import React, { Component } from "react";
import Questions from "../../components/QuestionBlock/Questions";
import Wrapper from "../../components/Wrapper";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col, Input, Button } from "mdbreact";
import { RadioGroup, ReversedRadioButton, RadioButton } from "react-radio-buttons";
import "./exam.css";

class Exam extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
}

render() {
    return (
        <div>
            <Wrapper>
                <Container>
                    <Jumbotron />
                    <h3>Whats your Favorite Fruit?</h3>
                    <RadioGroup onChange={(tunababy) => this.setState({inputValue: tunababy})} value={this.state.inputValue} vertical>
                        <RadioButton value="apple" iconSize={20}>
                            <p class="buttonText">Apple</p>
                        </RadioButton>
                        <RadioButton value="orange" iconSize={20}>
                            <p class="buttonText">Orange</p>
                        </RadioButton>
                        <RadioButton value="mango" iconSize={20}>
                            <p class="buttonText">Mango</p>
                        </RadioButton>
                        <RadioButton value="peach" iconSize={20}>
                            <p class="buttonText">Peach</p>
                        </RadioButton>
                        <Button color="elegant" type="Submit" onClick={(e) => console.log(this.state)}>
                            Submit
            </Button>
                    </RadioGroup>
                </Container>
            </Wrapper>
        </div>
    );
}
}

export default Exam;
