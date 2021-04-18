import React from 'react';
import { useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Main.css';

// Homepage Header main element
const Main = () => {
    const [search, setSearch] = useState({});

    // For capturing form data
    const handleBlur = (e) => {
        const newData = { ...search };
        newData[e.target.name] = e.target.value;
        setSearch(newData);
    }

    const history = useHistory();

    // For searching tours by destination and tour type
    const handleSubmit = (e) => {
        history.push(`/destinations?destination=${search.destination}&type=${search.type}`);

        e.preventDefault();
    }
    return (
        <div className="form p-2">
            <Form>
                <Row className="mt-3">
                    <Col md={5}>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <select name="destination" className="form-control" onBlur={handleBlur}>
                                <option selected disabled>Destination</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Dubai">Dubai</option>
                                <option value="France">France</option>
                                <option value="Italy">Italy</option>
                                <option value="Netherland">Netherland</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Singapore">Singapore</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <select name="type" className="form-control" onBlur={handleBlur}>
                                <option selected disabled>Tour type</option>
                                <option value="Adventure Travel">Adventure Travel</option>
                                <option value="Beaches & Islands">Beaches & Islands</option>
                                <option value="Family Tours">Family Tours</option>
                                <option value="History & Culture">History & Culture</option>
                                <option value="Nature & wildlife">Nature & wildlife</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <button onClick={handleSubmit} className="btn btn-dark btn-block">Search</button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Main;