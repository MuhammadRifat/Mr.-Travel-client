import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import './Main.css';

const Main = () => {
    return (
        <div className="form p-3">
            <Form>
                <Row>
                    <Col md={7}>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom>
                                <option selected  disabled>Destination</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom>
                                <option selected disabled>Tour type</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Tour start date</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Select date" />
                        </InputGroup>
                    </Col>
                    <Col md={5}>
                        <button className="btn btn-primary btn-block">Search</button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Main;