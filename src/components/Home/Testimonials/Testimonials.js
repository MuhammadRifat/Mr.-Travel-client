import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TestimonialsDetail from './TestimonialsDetail';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    // Load all reviews from database
    useEffect(() => {
        fetch('https://blooming-plateau-30647.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <Container fluid style={{ backgroundColor: 'rgb(4, 49, 4)' }}>
            <Container>
                <h1 className="text-center text-white pt-3">Testimonials</h1><hr/>
                <Row className="justify-content-md-center pb-4">
                    {
                        testimonials.slice(0, 3)?.map(testimonial => <TestimonialsDetail testimonial={testimonial}></TestimonialsDetail>)
                    }
                </Row>
                <hr />
            </Container>
        </Container>
    );
};

export default Testimonials;