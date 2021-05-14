import React, { useState} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../components/Form";

function Login() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleLogin(e) {
        e.preventDefault();
        console.log(formObject)
    }

    function handleSignup(e){
        e.preventDefault();
        console.log(formObject)
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="userName"
                            placeholder="User Name"
                            type="text"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <FormBtn
                            disabled={!(formObject.userName && formObject.password)}
                            onClick={handleLogin}
                        >
                            Login
                        </FormBtn>
                    </form>
                </Col>
                <Col size="md-6">
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="new_userName"
                            placeholder="User Name"
                            type="text"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="new_password"
                            placeholder="Password"
                            type="password"
                        />
                        <FormBtn
                            disabled={!(formObject.new_userName && formObject.new_password)}
                            onClick={handleSignup}
                        >
                            Sign up
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
