import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import DestinationDetail from '../Destination/DestinationDetail';
import BookingForm from './BookingForm/BookingForm';
import ToursDetail from './ToursDetail';

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])
    
    const history = useHistory();
    const handleBookBtn = (id) => {
        history.push(`/booking-form/${id}`);
    }
    return (
        <Container>
            <h1 className="mt-5 text-center">Tours</h1>
            <hr/>
            <Row className="justify-content-md-center mt-4">
                {
                    tours?.map(tour => <ToursDetail tour={tour} handleBookBtn={handleBookBtn} key={tour._id}></ToursDetail>)
                }
            </Row>
        </Container>
    );
};

export default Tours;