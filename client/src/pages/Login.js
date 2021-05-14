import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../components/Form";

function Login() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit() {
        console.log(formObject)
    }


    return (
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
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
            >
                Submit Book
           </FormBtn>
        </form>
    );
}

export default Login;
