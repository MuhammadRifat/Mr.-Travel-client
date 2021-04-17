import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';

const AddTour = () => {
    const [tourData, setTourData] = useState({});
    const [spinner, setSpinner] = useState(false);

    const handleBlur = (e) => {
        const newData = { ...tourData };
        newData[e.target.name] = e.target.value;
        setTourData(newData);
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c4ebb744a3b647feb62c85c668dcb1fa');
        imageData.append('image', event.target.files[0]);

        // upload image and generate a unique image url
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const newData = { ...tourData };
                newData.imageUrl = response.data.data.display_url;
                setTourData(newData);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleSubmit = (e) => {
        setSpinner(true);
        fetch(`http://localhost:5000/addTour`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tourData)
        })
            .then(res => {
                if (res) {
                    alert("Data added successfully")
                    setSpinner(false);
                    document.getElementById('title').value = '';
                    document.getElementById('location').value = '';
                    document.getElementById('cost').value = '';
                    document.getElementById('description').value = '';
                    document.getElementById('image').value = '';
                    document.getElementById('time').value = '';
                }
                setSpinner(false);
            })

        e.preventDefault();
    }
    return (
        <Container>
            <h2>Add Tour</h2>
            <hr />
            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <form className="bg-white p-3 rounded mb-3" onSubmit={handleSubmit}>
                <Row>
                    <Col lg={9}>
                    <Row>
                    <Col md={4}>
                        <b>Tour Title</b><br />
                        <input name="title" onBlur={handleBlur} type="text" className="form-control" id="title" placeholder="Enter service title" required />
                    </Col>
                    <Col md={4}>
                        <b>Image</b><br />
                        <input name="image" onChange={handleImageUpload} type="file" className="form-control" id="image" required />
                    </Col>
                    <Col md={4}>
                        <b>Location</b><br />
                        <input name="location" onBlur={handleBlur} type="text" className="form-control" id="location" placeholder="Enter location" required />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={4}>
                        <b>Package Time</b><br />
                        <input name="time" onBlur={handleBlur} type="text" className="form-control" id="time" placeholder="Enter package time" required />
                    </Col>
                    <Col md={4}>
                        <b>Total Cost</b><br />
                        <input name="cost" onBlur={handleBlur} type="number" className="form-control" id="cost" placeholder="Enter total cost" required />
                    </Col>
                    <Col md={4}>
                        <b>Tour Type</b><br />
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <select name="type" onBlur={handleBlur} className="form-control">
                                <option value="Adventure Travel">Adventure Travel</option>
                                <option value="Beaches & Islands">Beaches & Islands</option>
                                <option value="Family Tours">Family Tours</option>
                                <option value="History & Culture">History & Culture</option>
                                <option value="Nature & wildlife">Nature & wildlife</option>
                            </select>
                        </Form.Group>
                    </Col>
                    
                </Row>
                    </Col>
                    <Col lg={3}>
                        <b>Description</b><br />
                        <textarea name="description" onBlur={handleBlur} rows={4} className="form-control" id="description" placeholder="Enter description" required></textarea>
                    </Col>
                </Row>
                <hr />
                <div className="text-center"><button className="btn btn-success" type="submit">Save</button></div>
            </form>
        </Container>
    );
};

export default AddTour;