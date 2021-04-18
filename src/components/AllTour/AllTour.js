import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ToursDetail from '../Home/Tours/ToursDetail';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Topnav from '../Home/Header/Topnav/Topnav';

const AllTour = () => {
    const [tours, setTours] = useState([]);
    const [spinner, setSpinner] = useState(false);

    // Load all tours from database
    useEffect(() => {
        setSpinner(true);
        fetch('https://blooming-plateau-30647.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data);
                setSpinner(false);
            })
    }, [])

    const history = useHistory();

    // For booking tour
    const handleBookBtn = (id) => {
        history.push(`/booking-form/${id}`);
    }

    // For Searching tours
    const handleSearch = (e) => {
        fetch('https://blooming-plateau-30647.herokuapp.com/tourSearch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({search: e.target.value})
        })
        .then(res => res.json())
        .then(data => {
            setTours(data);
        })
    }
    return (
        <>
            <Topnav></Topnav>
            <hr />
            <Container>
                <h1 className="text-center">Tours</h1>
                <hr />
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <div className="d-flex">
                            <input type="text" onChange={handleSearch} class="form-control" placeholder="Search" />
                        </div>
                    </Col>
                </Row>
                {
                    spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
                }
                {
                    !spinner && !tours.length && <p className="text-center text-danger mt-4">Not Found</p>
                }
                <Row className="justify-content-md-center mt-3">
                    {
                        tours.map(tour => <ToursDetail tour={tour} handleBookBtn={handleBookBtn} key={tour._id}></ToursDetail>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default AllTour;