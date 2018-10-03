import React, { Component } from "react";
import Questions from "../../components/QuestionBlock/Questions";
import Wrapper from "../../components/Wrapper";
import Jumbotron from "../../components/Jumbotron"
import ExamComponent from "../../components/ExamComponent"
import { Container, Row, Col, Input, Button } from 'mdbreact';
import "./Exam.css";

class Exam extends Component {
    render() {
        return (
            <div>
            <Jumbotron />
                <Wrapper>
                    <Container>
                        <ExamComponent>
                        {/* <Questions
                            q={"Whats the First Letter of the Alphabet?"}
                            q1={"A"}
                            q2={"B"}
                            q3={"C"}
                            q4={"D"} /> */}
                        </ExamComponent>
                    </Container>
                </Wrapper>
            </div>
        )
    }
};

export default Exam