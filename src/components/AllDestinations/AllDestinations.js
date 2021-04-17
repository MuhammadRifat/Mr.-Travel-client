import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Topnav from '../Home/Header/Topnav/Topnav';
import ToursDetail from '../Home/Tours/ToursDetail';

const AllDestinations = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const destination = params.get('destination');
    const type = params.get('type');

    const [tours, setTours] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        fetch('http://localhost:5000/toursByDestination', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ location: destination, type: type })
        })
            .then(res => res.json())
            .then(data => {
                setTours(data);
                setSpinner(false);
            })
    }, [])

    const history = useHistory();
    const handleBookBtn = (id) => {
        history.push(`/booking-form/${id}`);
    }

    return (
        <>
            <Topnav></Topnav>
            <hr />
            <Container>
                <h2 className="mt-2 text-center">{destination}</h2>
                <p className="text-center">{type}</p>
                <hr />
                {
                    spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
                }
                <Row className="justify-content-md-center">
                    {
                        tours.map(tour => <ToursDetail tour={tour} handleBookBtn={handleBookBtn} key={tour._id}></ToursDetail>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default AllDestinations;