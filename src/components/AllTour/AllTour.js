import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ToursDetail from '../Home/Tours/ToursDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Spinner } from 'react-bootstrap';
import Topnav from '../Home/Header/Topnav/Topnav';

const AllTour = () => {
    const [tours, setTours] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        fetch('http://localhost:5000/tours')
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
                <h1 className="mt-5 text-center">Tours</h1>
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

export default AllTour;