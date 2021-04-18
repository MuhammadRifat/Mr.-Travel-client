import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import DestinationDetail from './DestinationDetail';

const Destination = () => {

    // Fake data for Discover Spotlight Destinations
    const types = [
        {
            id: 1,
            name: 'Adventure Travel',
            image: 'https://i.ibb.co/NpWQ1qg/adventure-1.jpg'
        },
        {
            id: 2,
            name: 'Beaches & Islands',
            image: 'https://i.ibb.co/Syk28d5/beach-1.jpg'
        },
        {
            id: 3,
            name: 'Family Tours',
            image: 'https://i.ibb.co/jHL2bgY/family-1.jpg'
        },
        {
            id: 4,
            name: 'History & Culture',
            image: 'https://i.ibb.co/mtDJdGL/history-1.jpg'
        },
        {
            id: 5,
            name: 'Nature & wildlife',
            image: 'https://i.ibb.co/fvtpXhp/wildlife-1.jpg'
        }
    ];

    const history = useHistory();

    // For handling Discover Button
    const handleDiscoverBtn = (id) => {
        const typeData = types.find(type => type.id === id);
        history.push(`/destinations?destination=ALL&type=${typeData.name}`);
    }
    return (
        <Container fluid style={{ backgroundColor: 'rgb(4, 49, 4)' }}>
            <h1 className="pt-5 text-center text-white">Discover Spotlight Destinations</h1>
            <hr />
            <Row className="justify-content-md-center">
                {
                    types.map(type => <DestinationDetail type={type} handleDiscoverBtn={handleDiscoverBtn} key={type.id}></DestinationDetail>)
                }
            </Row>
            <hr />
        </Container>
    );
};

export default Destination;