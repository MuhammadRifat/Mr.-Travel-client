import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ToursDetail from './ToursDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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

    const handleExplore = () => {
        history.push('/tours');
    }
    return (
        <Container>
            <h1 className="mt-5 text-center">Tours</h1>
            <hr/>
            <Row className="justify-content-md-center">
                {
                    tours.slice(0,6).map(tour => <ToursDetail tour={tour} handleBookBtn={handleBookBtn} key={tour._id}></ToursDetail>)
                }
            </Row>
            <div className="text-center mt-4"><button onClick={handleExplore} className="btn btn-dark">Explore More <FontAwesomeIcon icon={faArrowRight}/></button></div>
            <hr/>
        </Container>
    );
};

export default Tours;