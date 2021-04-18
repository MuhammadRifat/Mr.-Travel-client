import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Guide from './Guide/Guide';

const TravelGuide = () => {
    const advices = [
        {
            id: 1,
            title: 'Tips for taking a long-term trip with kids',
            image: 'https://i.ibb.co/jHL2bgY/family-1.jpg',
            date: '15th April, 2021'
        },
        {
            id: 2,
            title: 'Eight common travel tech disasters',
            image: 'https://i.ibb.co/Syk28d5/beach-1.jpg',
            date: '16th April, 2021'
        },
        {
            id: 3,
            title: 'An A to Z timeless travel advice',
            image: 'https://i.ibb.co/NpWQ1qg/adventure-1.jpg',
            date: '17th April, 2021'
        },
    ];

    const history = useHistory();
    const handleContinueBtn = (id) => {
        history.push(`/travel-guide?id=${id}`);
    }
    return (
        <Container>
            <h1 className="mt-5 text-center">Travel guide and tips</h1>
            <hr/>
            <Row className="justify-content-md-center">
                {
                    advices.map(advice => <Guide advice={advice} handleContinueBtn={handleContinueBtn} key={advice._id}></Guide>)
                }
            </Row>
        </Container>
    );
};

export default TravelGuide;