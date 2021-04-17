import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TestimonialsDetail from './TestimonialsDetail';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    
    return (
        <Container>
            <h1 className="mt-5 text-center">Testimonials</h1>
            <hr/>
            <Row className="justify-content-md-center mt-4">
                {
                    testimonials?.map(testimonial => <TestimonialsDetail testimonial={testimonial}></TestimonialsDetail>)
                }
            </Row>
        </Container>
    );
};

export default Testimonials;