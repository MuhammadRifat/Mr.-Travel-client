import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Topnav from '../Home/Header/Topnav/Topnav';
import ToursDetail from '../Home/Tours/ToursDetail';

const AllDestinations = () => {

    // For getting url query
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const destination = params.get('destination');
    const type = params.get('type');

    const [tours, setTours] = useState([]);
    const [spinner, setSpinner] = useState(false);

    // Load tours data from database whin searching destination and tour type
    useEffect(() => {
        setSpinner(true);
        fetch('https://blooming-plateau-30647.herokuapp.com/toursByDestination', {
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

    // For booking tour
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
                {
                    !spinner && !tours.length && <p className="text-center text-danger mt-4">Not Found</p>
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