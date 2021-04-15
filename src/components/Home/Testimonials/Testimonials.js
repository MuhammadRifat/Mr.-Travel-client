import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TestimonialsDetail from './TestimonialsDetail';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Anna Kate',
            image: 'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
            country: 'Bangladesh',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias. Debitis expedita aspernatur sequi vero modi. Vel ad dolore porro officia vitae reprehenderit fugit, nisi optio ducimus dolorem dolores error.'
        },
        {
            name: 'Anna Kate',
            image: 'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
            country: 'Bangladesh',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias. Debitis expedita aspernatur sequi vero modi. Vel ad dolore porro officia vitae reprehenderit fugit, nisi optio ducimus dolorem dolores error.'
        },
        {
            name: 'Anna Kate',
            image: 'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
            country: 'Bangladesh',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias. Debitis expedita aspernatur sequi vero modi. Vel ad dolore porro officia vitae reprehenderit fugit, nisi optio ducimus dolorem dolores error.'
        },
        {
            name: 'Anna Kate',
            image: 'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
            country: 'Bangladesh',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, alias. Debitis expedita aspernatur sequi vero modi. Vel ad dolore porro officia vitae reprehenderit fugit, nisi optio ducimus dolorem dolores error.'
        }
    ];
    return (
        <Container>
            <h1 className="mt-5 text-center">Testimonials</h1>
            <hr/>
            <Row className="justify-content-md-center mt-4">
                {
                    testimonials.map(testimonial => <TestimonialsDetail testimonial={testimonial}></TestimonialsDetail>)
                }
            </Row>
        </Container>
    );
};

export default Testimonials;