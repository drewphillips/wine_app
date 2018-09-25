import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Login extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <h1>Wine'd Up! </h1>

                        <form>
                            <Input name="username" placeholder="Username (required)" />
                            <Input name="Password" placeholder="Password (required)" />
                            <FormBtn>Log In</FormBtn>
                        </form>


                    </Col>
                </Row>
            </Container>

        );
    }
}
export default Login;
