import React from "react";
import {Button, ButtonGroup, Col, Row, Form, InputGroup, FormControl} from "react-bootstrap";
import styles from './styles/home_login.module.css'

class Home_login extends React.Component {
    render() {
        return (
            <div className="form_login">
                <div className="form_space">
                <Form className="home_form">
                    <Form.Row className="row_space align-items-center">
                        <Col sm={3}>
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Username"
                            />
                        </Col>
                        <Col sm={3}>
                            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                Username
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl size="lg"
                                             id="inlineFormInputGroup"
                                             type="password"
                                             placeholder="Password" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" size="lg" className="submit_button mb-2">
                                Login
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                </div>
            </div>
        )
    }
}

export default Home_login