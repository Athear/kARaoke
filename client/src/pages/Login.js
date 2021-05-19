import React, { useContext, useState, } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import "../css/login.css";
import { useAuth } from "../utils/use-auth"

function Login() {
    const [formObject, setFormObject] = useState({});

    const AUTH = useAuth()

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleLogin(e) {
        e.preventDefault();
        if (formObject.userName && formObject.password) {
            AUTH.signin(formObject.userName, formObject.password)
                .then(() => console.log("Logged in")) //Placeholder! Do a redirect
                .catch((err) =>
                    console.log(err)
                );
        }
    }

    function handleSignup(e) {
        e.preventDefault();
        if (
            formObject.new_userName &&
            formObject.new_password &&
            formObject.new_email
        ) {
            AUTH.signup(
                formObject.new_userName,
                formObject.new_email,
                formObject.new_password,
            )
                .then(() => console.log("signed up!")) //Placeholder! Do a redirect
                .catch((err) =>
                    console.log(err.response.data.message, err.response.status)
                );
        }
    }


    function handleLogout(e) {
        e.preventDefault();
        AUTH.signout()
            .then(res => console.log("signed out")) //Placeholder! Do a redirect 
            .catch(err => console.log(err.response.data.message, err.response.status));
    }


    function validateSession(e) {
        console.log(AUTH.user)
        if (AUTH.user) {

            console.log('valid!')
        } else {
            console.log('invalid!')
        }
    }


    return (
        <div className="background">
            <Container fluid>
                <Row className="padding">
                    <Col size="md-6">
                        <h2 className="heading">Login</h2>
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
                                Welcome Back!
              </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6">
                        <h2 className="heading">Sign-up</h2>
                        <form>
                            <Input
                                onChange={handleInputChange}
                                name="new_userName"
                                placeholder="User Name"
                                type="text"
                            />
                            <Input
                                onChange={handleInputChange}
                                name="new_email"
                                placeholder="Email"
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
                                Are You Ready to ROCK?
              </FormBtn>
                        </form>
                    </Col>
                </Row>
                <FormBtn onClick={validateSession}>
                    validate
        </FormBtn>
                <FormBtn onClick={handleLogout}>
                    logout
        </FormBtn>
            </Container>
        </div>
    );
}

export default Login;
