import React, { useState, } from "react";
import { useHistory, useLocation } from "react-router-dom";
import sweetAlert from 'sweetalert2'
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { useAuth } from "../utils/use-auth"
import "../css/login.css";


function Login() {

    const AUTH = useAuth()
    const history = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from: { pathname: "/" } };
    const handleRedirect = () => history.replace(from)

    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function onErrorHandler(message,status){
        sweetAlert.fire({
            icon: 'warning',
            title: message,
            footer: 'Error: ' + status
          })
    }

    function handleLogin(e) {
        e.preventDefault();
        if (formObject.userName && formObject.password) {
            AUTH.signin(formObject.userName, formObject.password)
                .then(handleRedirect)
                .catch((err) => onErrorHandler(err.response.data.message,err.response.status));
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
            .then(handleRedirect)
            .catch((err) => onErrorHandler(err.response.data.message, err.response.status));
        }
    }

    function validateSession(e) {
        if (AUTH.user) {
            sweetAlert.fire({
                icon: 'success',
                text: 'You are logged in!!',
                footer: 'user name: '+AUTH.user.username
              })
        } else {
            sweetAlert.fire({
                icon: 'warning',
                text: 'You are not logged in',
              })
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
            </Container>
        </div>
    );
}

export default Login;
