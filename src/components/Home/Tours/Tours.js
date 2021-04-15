import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DestinationDetail from '../Destination/DestinationDetail';
import ToursDetail from './ToursDetail';

const Tours = () => {
    const tours = [
        {
            name: '2-Day National Park Tour',
            location: 'Dhaka',
            country: 'Bangladesh',
            time: '2 days - 1 night',
            price: '300',
            image: 'https://thumbs.dreamstime.com/b/target-achievement-mountain-adventure-taurus-mountains-altitude-meter-61542260.jpg'
        },
        {
            name: '2-Day National Park Tour',
            location: 'Dhaka',
            country: 'Bangladesh',
            time: '2 days - 1 night',
            price: '300',
            image: 'https://thumbs.dreamstime.com/b/target-achievement-mountain-adventure-taurus-mountains-altitude-meter-61542260.jpg'
        },
        {
            name: '2-Day National Park Tour',
            location: 'Dhaka',
            country: 'Bangladesh',
            time: '2 days - 1 night',
            price: '300',
            image: 'https://thumbs.dreamstime.com/b/target-achievement-mountain-adventure-taurus-mountains-altitude-meter-61542260.jpg'
        }
    ];
    return (
        <Container>
            <h1 className="mt-5 text-center">Tours</h1>
            <hr/>
            <Row className="justify-content-md-center mt-4">
                {
                    tours.map(tour => <ToursDetail tour={tour}></ToursDetail>)
                }
            </Row>
        </Container>
    );
};

export default Tours;