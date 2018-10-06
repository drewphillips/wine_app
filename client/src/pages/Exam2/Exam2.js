import React, { Component } from "react";
import Questions from "../../components/QuestionBlock/Questions";
import Wrapper from "../../components/Wrapper";
import Jumbotron from "../../components/Jumbotron"
import { Container, Row, Col, Input, Button } from 'mdbreact';
import "./Exam2.css";

class Exam2 extends Component {
    render() {
        return (
            <div>
            <Jumbotron />
                <Wrapper>
                    <Container>
                        <Questions
                            q={"White Grape Exam Template"}
                            q1={"A"}
                            q2={"B"}
                            q3={"C"}
                            q4={"D"} />
                    </Container>
                </Wrapper>
            </div>
        )
    }
};

export default Exam2