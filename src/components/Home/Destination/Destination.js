import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DestinationDetail from './DestinationDetail';

const Destination = () => {
    const types = [
        {
            name: 'Adventure Travel',
            icon: 'faMountain',
            image: 'https://thumbs.dreamstime.com/b/target-achievement-mountain-adventure-taurus-mountains-altitude-meter-61542260.jpg'
        },
        {
            name: 'Beach and Islands',
            icon: 'faMountain',
            image: ''
        },
        {
            name: 'Adventure Travel',
            icon: 'faMountain',
            image: ''
        },
    ];
    return (
        <Container>
            <h1 className="mt-5 text-center">Discover Spotlight Destinations</h1>
            <hr/>
            <Row className="justify-content-md-center mt-4">
                {
                    types.map(type => <DestinationDetail type={type}></DestinationDetail>)
                }
            </Row>
        </Container>
    );
};

export default Destination;